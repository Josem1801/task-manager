"use client";

import { PropsWithChildren, useEffect, useId, useLayoutEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/shared/store/types";
import { Box } from "@/ui/components/box";
import { Spinner } from "@/ui/icons/spinner";

import { AuthSelector } from "../store";
import { useValidateTokenQuery } from "../store/auth.api";

const TO_LOGIN_PATH = "/auth/login";
const TO_HOME_PATH = "/";

export const AuthLayout = ({ children }: PropsWithChildren) => {
  const dynamicKey = useId();
  const router = useRouter();
  const pathname = usePathname();

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
      if (isPublicRoute) router.replace(TO_HOME_PATH);
    }
  }, [authState, isPublicRoute, validateToken.isFetching]);

  if (validateToken.isFetching) {
    return (
      <Box
        columns={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100dvh"
      >
        <Spinner width={40} height={40} />
      </Box>
    );
  }

  return children;
};
