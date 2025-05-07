"use client";

import { PropsWithChildren, useEffect, useId, useLayoutEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/shared/store/types";
import { Box } from "@/ui/components/box";
import { Spinner } from "@/ui/icons/spinner";

import { AuthActions, AuthSelector } from "../store";
import { useValidateTokenQuery } from "../store/auth.api";

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
    if (authState.loading || validateToken.isFetching) return;
    if (!authState.isAuthenticated && !isPublicRoute) {
      return router.replace("/auth/login");
    }
    if (authState.isAuthenticated && isPublicRoute) {
      return router.replace("/");
    }
  }, [authState, isPublicRoute, validateToken.isFetching]);

  useEffect(() => {
    if (!authState.isAuthenticated) return;
    validateToken
      .refetch()
      .then((response) => {
        if (!response.error) return;
        dispatch(AuthActions.logout());
      })
      .catch(() => {
        dispatch(AuthActions.logout());
      });
  }, [authState.isAuthenticated]);

  if (authState.loading || validateToken.isFetching) {
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
