"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { Button } from "@/ui/components/button";
import { Heading } from "@/ui/components/heading";
import { InputField } from "@/ui/components/input-filed";
import { InputPassword } from "@/ui/components/input-password";
import { Typography } from "@/ui/components/typography";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuthMutation } from "@/features/auth/store/auth.api";

import { loginSchema } from "./login-form.const";
import { Form, FormContainer } from "./login-form.styles";

export const LoginForm = () => {
  const router = useRouter();

  const [loginMutation, login] = useAuthMutation();
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await loginMutation(data).unwrap();
    } catch (error) {
      console.error("Login failed:", error);
    }
  });

  return (
    <FormContainer>
      <Heading variant="h1">Welcome !</Heading>
      <div>
        <Heading variant="h2">Sign in to</Heading>
        <Typography color="primary">
          Enter your details below to login to your account
        </Typography>
      </div>
      <Form onSubmit={onSubmit}>
        <InputField
          label="Email"
          {...methods.register("email")}
          type="email"
          id="email"
          name="email"
          required
        />
        <InputPassword
          label="Password"
          {...methods.register("password")}
          type="password"
          id="password"
          name="password"
          required
        />
        <Button type="submit" disabled={login.isLoading}>
          {login.isLoading ? "Loading..." : "Login"}
        </Button>
      </Form>
    </FormContainer>
  );
};
