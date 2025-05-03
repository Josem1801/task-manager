import { encryptToken, simulateLatency } from "@/shared/encryption";
import baseApi from "@/shared/store/api";
import { register } from "module";

import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./auth.types";

export const authApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["Login"] })
  .injectEndpoints({
    endpoints: (build) => ({
      auth: build.mutation<LoginResponse, LoginRequest>({
        query: (credentials) => ({
          url: "/api/login",
          method: "POST",
          body: credentials,
        }),
        transformResponse: async (response: { token: string }) => {
          await simulateLatency(1000, 3000);

          const { encryptedToken, key } = encryptToken(response.token);

          return {
            token: encryptedToken,
            key,
          };
        },
      }),
      validateToken: build.query<void, string>({
        query: (token) => ({
          url: "/api/validate-token",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      }),
      register: build.mutation<RegisterResponse, RegisterRequest>({
        query: (credentials) => ({
          url: "/api/register",
          method: "POST",
          body: credentials,
        }),
      }),
    }),

    overrideExisting: false,
  });

export const { useAuthMutation, useValidateTokenQuery } = authApi;
