import { authSlice } from "./auth.slice";
import { logoutUser } from "./auth.thunk";

const AuthActions = {
  ...authSlice.actions,
  logoutUser,
};

export { AuthActions };

export * as AuthSelector from "./auth.selector";
