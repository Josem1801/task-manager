import { useAppDispatch } from "@/shared/store/types";

import { AuthActions } from "../store";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(AuthActions.logout())}>Logout</button>;
};
