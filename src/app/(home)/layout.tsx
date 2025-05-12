"use client";

import React, { PropsWithChildren } from "react";

import { useAuth } from "@/features/auth/hooks/use-auth";

import { Box } from "@/ui/components/box";
import { Spinner } from "@/ui/icons/spinner";

const HomeLayout = ({ children }: PropsWithChildren) => {
  const auth = useAuth();

  if (auth.pending) {
    return (
      <Box
        alignItems="center"
        columns={1}
        display="flex"
        height="100dvh"
        justifyContent="center"
      >
        <Spinner height={40} width={40} />
      </Box>
    );
  }

  return children;
};

export default HomeLayout;
