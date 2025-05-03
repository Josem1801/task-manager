"use client";

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
} from "react";

import { redirect, usePathname, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/shared/store/types";

import { AuthActions, AuthSelector } from "../store";
import { useValidateTokenQuery } from "../store/auth.api";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const dynamicKey = useId();

  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useAppDispatch();

  const validateToken = useValidateTokenQuery(dynamicKey, {
    skip: !dynamicKey,
  });

  const authState = useAppSelector(AuthSelector.getAuthState);

  const isPublicRoute = pathname.includes("/auth");

  useEffect(() => {
    dispatch(AuthActions.checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (authState.loading) return;

    if (!authState.isAuthenticated && !isPublicRoute) {
      router.replace("/auth/login");
      return;
    }

    if (authState.isAuthenticated && isPublicRoute) {
      router.replace("/");
      return;
    }
  }, [authState, isPublicRoute, router]);

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
    return <div>Loading...</div>;
  }

  return children;
};
