import { simulateLatency } from "@/shared/encryption";
import baseApi from "@/shared/store/store.api";

import {
  TLoginRequest,
  TLoginResponse,
  TProfile,
  TRegisterRequest,
  TRegisterResponse,
} from "./auth.types";

export const authApi = baseApi
  .enhanceEndpoints({ addTagTypes: ["Login"] })
  .injectEndpoints({
    endpoints: (build) => ({
      auth: build.mutation<TLoginResponse, TLoginRequest>({
        query: (credentials) => ({
          url: "/login",
          method: "POST",
          body: credentials,
        }),
        transformResponse: async (response: TLoginResponse) => {
          await simulateLatency(1000, 3000);

          return response;
        },
      }),
      validateToken: build.query<TProfile, string>({
        query: () => ({
          // TODO: pass the dynamic token
          url: `/unknown/2`,
          method: "GET",
        }),
        transformResponse: (response: { data: TProfile }) => response?.data,
      }),
      register: build.mutation<TRegisterResponse, TRegisterRequest>({
        query: (credentials) => ({
          url: "/register",
          method: "POST",
          body: credentials,
        }),
      }),
    }),

    overrideExisting: false,
  });

export const { useAuthMutation, useValidateTokenQuery } = authApi;
