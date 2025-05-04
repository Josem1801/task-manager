// auth.slice.ts
import {
  decryptToken,
  EncryptionKeys,
  encryptToken,
} from "@/shared/encryption";
import { StorageKeys } from "@/shared/helpers/local-storage.service";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { authApi } from "./auth.api";
import { AuthState } from "./auth.types";

const initialState: AuthState = {
  isAuthenticated: false,
  tokenEncrypted: null,
  user: null,
  loading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
      sessionStorage.removeItem(StorageKeys.token);
    },

    checkAuth: (state) => {
      state.loading = true;
      const storedToken = sessionStorage.getItem(StorageKeys.token);
      if (storedToken) {
        try {
          decryptToken(storedToken, EncryptionKeys.token);
          state.tokenEncrypted = storedToken;
          state.isAuthenticated = true;
        } catch (error) {
          state.isAuthenticated = false;
          state.tokenEncrypted = null;
          sessionStorage.removeItem(StorageKeys.token);
        }
      }
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.auth.matchFulfilled,
      (state, action) => {
        const encryptedToken = encryptToken(
          action.payload.token,
          EncryptionKeys.token,
        );
        state.tokenEncrypted = encryptedToken;
        state.isAuthenticated = true;

        sessionStorage.setItem(StorageKeys.token, encryptedToken);
      },
    );
  },
});
