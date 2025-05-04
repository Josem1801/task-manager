import { decryptToken, EncryptionKeys } from "@/shared/encryption";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "./types";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-api-key", "reqres-free-v1");

      const token = (getState() as RootState).auth.tokenEncrypted;
      if (token) {
        const tokenDecrypted = decryptToken(token, EncryptionKeys.token);
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default baseApi;
