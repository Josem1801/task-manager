"use client";

import Image from "next/image";

import { Box } from "@/ui/components/box";

import { LoginForm } from "@/features/auth/components/login-form/login-form.component";

export default function Login() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap={40}
      maxWidth="desktop"
      width="100%"
      margin="auto"
    >
      <Box width="100%" display="flex" justifyContent="center">
        <LoginForm />
      </Box>
      <Box
        hiddenAt="tablet"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        position="relative"
      >
        <Image src="/images/login.svg" alt="login" fill />
      </Box>
    </Box>
  );
}
