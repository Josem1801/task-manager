import React from "react";

import { ThemeType } from "@/ui/styled";

import { Typography as STypography } from "./typography.styles";

type Variant = "small" | "medium" | "large" | "xlarge" | "xxlarge";

export type TypographyProps = {
  as?: React.ElementType;
  variant?: Variant;
  color?: keyof ThemeType["colors"];
  weight?: "normal" | "semibold" | "bold";
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Typography = ({
  as = "span",
  variant = "medium",
  color = "primary",
  weight = "normal",
  children,
  ...props
}: TypographyProps) => {
  return (
    <STypography
      as={as}
      color={color}
      variant={variant}
      weight={weight}
      {...props}
    >
      {children}
    </STypography>
  );
};
