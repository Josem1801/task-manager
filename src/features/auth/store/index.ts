import { authSlice } from "./auth.slice";

const AuthActions = {
  ...authSlice.actions,
};

export { AuthActions };

export * as AuthSelector from "./auth.selector";
