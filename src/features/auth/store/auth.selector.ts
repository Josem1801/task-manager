import { RootState } from "@/shared/store/types";
import { createSelector } from "@reduxjs/toolkit";

export const getAuthState = (state: RootState) => state.auth;
