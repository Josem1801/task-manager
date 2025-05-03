// auth.slice.ts
import { decryptToken, encryptToken } from "@/shared/encryption";
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
    setAuthCredentials: (state, action: PayloadAction<{ token: string }>) => {
      const { encryptedToken, key } = encryptToken(action.payload.token);

      state.tokenEncrypted = key;
      state.isAuthenticated = true;

      sessionStorage.setItem(StorageKeys.token, encryptedToken);
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.tokenEncrypted = null;
      state.user = null;

      sessionStorage.removeItem(StorageKeys.token);
    },

    checkAuth: (state) => {
      state.loading = true;
      const storedToken = sessionStorage.getItem(StorageKeys.token);
      if (storedToken) {
        try {
          decryptToken(storedToken, storedToken);
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
});
