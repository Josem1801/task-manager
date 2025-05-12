"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useAuthMutation } from "@/features/auth/store/auth.api";

import { Box } from "@/ui/components/box";
import { Button } from "@/ui/components/button";
import { Heading } from "@/ui/components/heading";
import { InputField } from "@/ui/components/input-filed";
import { InputPassword } from "@/ui/components/input-password";
import { Typography } from "@/ui/components/typography";

import { TLoginError } from "../../store/auth.types";
import { loginSchema } from "./login-form.const";
import { Form } from "./login-form.styles";

export const LoginForm = () => {
  const router = useRouter();
  const [loginMutation, login] = useAuthMutation();
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await loginMutation(data).unwrap();
      router.refresh();
    } catch (error: unknown) {
      const catchError = error as FetchBaseQueryError;
      const errorMessage = catchError?.data as TLoginError;

      methods.setError("password", { message: errorMessage.error });
      methods.setError("email", { message: "" });
    }
  });

  return (
    <Box
      border="1px solid #00000025"
      borderRadius={12}
      display="flex"
      flexDirection="column"
      gap={40}
      maxWidth={450}
      padding={40}
      width="100%"
    >
      <Heading variant="h1" weight="normal">
        Welcome !
      </Heading>
      <Box>
        <Heading variant="h2">Sign in to</Heading>
        <Typography color="secondary">
          Enter and take control of your tasks
        </Typography>
      </Box>
      <Form onSubmit={onSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          gap={24}
          margin="20px 0 40px 0"
        >
          <InputField
            {...methods.register("email")}
            error={methods.formState.errors.email?.message}
            id="email"
            label="Email"
            name="email"
            required
            type="email"
          />
          <Box>
            <InputPassword
              {...methods.register("password")}
              error={methods.formState.errors.password?.message}
              id="password"
              label="Password"
              name="password"
              required
              type="password"
            />
          </Box>
        </Box>

        <Button loading={login.isLoading} size="large" type="submit">
          Login
        </Button>
      </Form>
    </Box>
  );
};
