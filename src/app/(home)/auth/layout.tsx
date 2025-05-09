"use client";

import React, { PropsWithChildren } from "react";

import { Box } from "@/ui/components/box";
import { Heading } from "@/ui/components/heading";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box display="grid" gap={80} margin="auto" maxWidth={1200} padding={40}>
      <Heading underline variant="h1">
        Task Manager
      </Heading>
      {children}
    </Box>
  );
};

export default AuthLayout;
