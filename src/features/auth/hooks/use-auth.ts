"use client";

import { useId, useLayoutEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import { useBoolean } from "@/shared/hooks/use-boolean";
import { useAppDispatch, useAppSelector } from "@/shared/store/types";

import { AuthActions, AuthSelector } from "../store";
import { useValidateTokenQuery } from "../store/auth.api";

const TO_LOGIN_PATH = "/auth/login";
const TO_HOME_PATH = "/";

export const useAuth = () => {
  const pending = useBoolean(false);
  const dynamicKey = useId();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const authState = useAppSelector(AuthSelector.getAuthState);
  const isPublicRoute = pathname.includes("/auth");

  const validateToken = useValidateTokenQuery(dynamicKey, {
    skip: !authState.token,
  });

  useLayoutEffect(() => {
    pending.setTrue();

    if (!authState.isAuthenticated) {
      if (!isPublicRoute) return router.replace(TO_LOGIN_PATH);
    } else {
      if (validateToken.isFetching) return;
      if (isPublicRoute) return router.replace(TO_HOME_PATH);

      if (validateToken.isError) {
        dispatch(AuthActions.logout());
      }
    }
    pending.setFalse();
  }, [authState, dispatch, isPublicRoute, pending, router, validateToken]);

  return { pending: pending.value };
};
