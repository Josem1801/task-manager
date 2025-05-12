import { createSlice } from "@reduxjs/toolkit";

import { authApi } from "./auth.api";
import { TAuthState } from "./auth.types";

const initialState: TAuthState = {
  isAuthenticated: false,
  token: null,
  profile: null,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.auth.matchFulfilled,
      (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
      },
    );
    builder.addMatcher(
      authApi.endpoints.validateToken.matchFulfilled,
      (state, action) => {
        state.profile = action.payload;
        state.loading = false;
      },
    );
  },
});
