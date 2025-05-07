"use client";

import React, { PropsWithChildren } from "react";

import Image from "next/image";

import { Box } from "@/ui/components/box";
import { Heading } from "@/ui/components/heading";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box display="grid" padding={40} gap={80} maxWidth={1200} margin="auto">
      <Heading underline variant="h1">
        Task Manager
      </Heading>
      {children}
    </Box>
  );
};

export default AuthLayout;
