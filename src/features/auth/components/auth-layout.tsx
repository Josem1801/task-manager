"use client";

import { PropsWithChildren, useEffect, useId } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useAppSelector } from "@/shared/store/types";
import { useAppDispatch } from "@/shared/store/types";
import { Box } from "@/ui/components/box";
import { Spinner } from "@/ui/icons/spinner";

import { AuthSelector } from "../store";
import { AuthActions } from "../store";
import { useValidateTokenQuery } from "../store/auth.api";

const TO_LOGIN_PATH = "/auth/login";
const TO_HOME_PATH = "/";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  const dynamicKey = useId();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const authState = useAppSelector(AuthSelector.getAuthState);
  const isPublicRoute = pathname.includes("/auth");

  const validateToken = useValidateTokenQuery(dynamicKey, {
    skip: !authState.token,
  });

  useEffect(() => {
    if (validateToken.isFetching) return;

    if (!authState.isAuthenticated) {
      if (!isPublicRoute) router.replace(TO_LOGIN_PATH);
    }

    if (authState.isAuthenticated) {
      if (isPublicRoute) return router.replace(TO_HOME_PATH);

      if (validateToken.isError) {
        dispatch(AuthActions.logout());
      }
    }
  }, [authState, dispatch, isPublicRoute, router, validateToken]);

  if (validateToken.isFetching) {
    return (
      <Box
        alignItems="center"
        columns={1}
        display="flex"
        height="100dvh"
        justifyContent="center"
      >
        <Spinner height={40} width={40} />
      </Box>
    );
  }

  return children;
};
