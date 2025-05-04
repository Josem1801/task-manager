import React from "react";

import { GridContainer as GridContainerStyled } from "./grid-container.styles";

export const GridContainer = ({
  children,
  columns,
}: {
  children: React.ReactNode;
  columns: number;
}) => {
  return (
    <GridContainerStyled columns={columns}>{children}</GridContainerStyled>
  );
};
