import React from "react";

import { ThemeType } from "@/ui/styled";

import { Button as SButton } from "./button.styles";

type Variant = "primary" | "secondary" | "outline";

export type ButtonProps = {
  variant?: Variant;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  ...props
}: ButtonProps) => {
  return (
    <SButton variant={variant} size={size} {...props}>
      {children}
    </SButton>
  );
};
