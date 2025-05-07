import { RootState } from "@/shared/store/types";

export const getAuthState = (state: RootState) => state.auth;
export const getProfile = (state: RootState) => state.auth.profile;
