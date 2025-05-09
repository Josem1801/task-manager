"use client";

import Image from "next/image";

import { Box } from "@/ui/components/box";

import { LoginForm } from "@/features/auth/components/login-form/login-form.component";

export default function Login() {
  return (
    <Box
      display="flex"
      gap={40}
      justifyContent="space-between"
      margin="auto"
      maxWidth="desktop"
      width="100%"
    >
      <Box display="flex" justifyContent="center" width="100%">
        <LoginForm />
      </Box>
      <Box
        alignItems="center"
        display="flex"
        hiddenAt="tablet"
        justifyContent="center"
        position="relative"
        width="100%"
      >
        <Image alt="login" fill src="/images/login.svg" />
      </Box>
    </Box>
  );
}
