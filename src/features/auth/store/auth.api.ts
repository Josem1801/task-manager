import { encryptToken, simulateLatency } from "@/shared/encryption";
import baseApi from "@/shared/store/api";

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
        transformResponse: async (response: LoginResponse) => {
          await simulateLatency(1000, 3000);
          return response;
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
