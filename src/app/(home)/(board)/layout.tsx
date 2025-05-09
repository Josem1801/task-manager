"use client";

import React, { PropsWithChildren } from "react";

import { useAppSelector } from "@/shared/store/types";
import { Box } from "@/ui/components/box";
import { Heading } from "@/ui/components/heading";
import { Typography } from "@/ui/components/typography";

import { LogoutButton } from "@/features/auth/components/logout-button";
import { AuthSelector } from "@/features/auth/store";

const BoardLayout = ({ children }: PropsWithChildren) => {
  const profile = useAppSelector(AuthSelector.getProfile);

  return (
    <Box
      columns={1}
      display="grid"
      gap={20}
      margin="2rem auto"
      maxWidth="desktop"
      padding="0 3rem"
      width="100%"
    >
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <span>
          <Heading style={{ textDecoration: "underline" }} variant="h1">
            Hi {profile?.name} 👋!
          </Heading>
          <Typography variant="medium">
            Welcome back to your task board
          </Typography>
        </span>
        <LogoutButton />
      </Box>
      {children}
    </Box>
  );
};

export default BoardLayout;
