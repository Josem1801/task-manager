"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/shared/store/types";
import { yupResolver } from "@hookform/resolvers/yup";

import { AuthActions } from "@/features/auth/store";
import { useAuthMutation } from "@/features/auth/store/auth.api";

import { loginSchema } from "./login-form.const";

export const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [loginMutation, login] = useAuthMutation();
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      const response = await loginMutation(data).unwrap();
      dispatch(
        AuthActions.setAuthCredentials({
          token: response.token,
        }),
      );
    } catch (error) {
      console.error("Login failed:", error);
    }
  });

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            {...methods.register("email")}
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            {...methods.register("password")}
            type="password"
            id="password"
            name="password"
            required
          />
          {login.error && <div style={{ color: "red" }}>{"Login failed"}</div>}
        </div>
        <button type="submit" disabled={login.isLoading}>
          {login.isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};
