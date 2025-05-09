import { useAppDispatch } from "@/shared/store/types";
import { Button } from "@/ui/components/button";

import { AuthActions } from "../store";

export const LogoutButton = () => {
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    dispatch(AuthActions.logout());
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};
