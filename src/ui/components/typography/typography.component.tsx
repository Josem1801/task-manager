import React from "react";

import { ThemeType } from "@/ui/styled";

import { Typography as STypography } from "./typography.styles";

type Variant = "body1" | "body2" | "caption" | "overline";

export type TypographyProps = {
  as?: React.ElementType;
  variant: Variant;
  color?: keyof ThemeType["colors"];
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Typography = ({
  as = "span",
  variant,
  color = "primary",
  children,
  ...props
}: TypographyProps) => {
  return (
    <STypography as={as} variant={variant} color={color} {...props}>
      {children}
    </STypography>
  );
};
