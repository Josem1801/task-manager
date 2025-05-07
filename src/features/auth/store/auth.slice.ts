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
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.profile = null;
      state.loading = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
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
      },
    );
  },
});
