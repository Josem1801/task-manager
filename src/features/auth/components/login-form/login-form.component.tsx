"use client";

import React from "react";
import { useForm } from "react-hook-form";

import { useRouter } from "next/navigation";

import { Box } from "@/ui/components/box";
import { Button } from "@/ui/components/button";
import { Heading } from "@/ui/components/heading";
import { InputField } from "@/ui/components/input-filed";
import { InputPassword } from "@/ui/components/input-password";
import { Typography } from "@/ui/components/typography";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAuthMutation } from "@/features/auth/store/auth.api";

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
    } catch (error) {
      console.error("Login failed:", error);
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
        <Typography color="primary">
          Enter and take control of your tasks
        </Typography>
      </Box>
      <Form onSubmit={onSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          gap={20}
          margin="20px 0 40px 0"
        >
          <InputField
            label="Email"
            {...methods.register("email")}
            id="email"
            name="email"
            required
            type="email"
          />
          <InputPassword
            label="Password"
            {...methods.register("password")}
            id="password"
            name="password"
            required
            type="password"
          />
        </Box>
        <Button loading={login.isLoading} size="large" type="submit">
          Login
        </Button>
      </Form>
    </Box>
  );
};
