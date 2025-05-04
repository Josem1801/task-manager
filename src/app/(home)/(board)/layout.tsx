"use client";

import React, { PropsWithChildren } from "react";

import { GridContainer } from "@/ui/components/grid-container";
import { Heading } from "@/ui/components/heading";

const BoardLayout = ({ children }: PropsWithChildren) => {
  return (
    <GridContainer columns={1}>
      <Heading variant="h1">Task Board</Heading>
      {children}
    </GridContainer>
  );
};

export default BoardLayout;
