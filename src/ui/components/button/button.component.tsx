import React from "react";

import { Spinner } from "@/ui/icons/spinner";
import { ThemeType } from "@/ui/styled";

import { Button as SButton } from "./button.styles";

type Variant = "primary" | "secondary" | "outline" | "transparent";

export type ButtonProps = {
  variant?: Variant;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = "primary",
  size = "medium",
  children,
  loading,
  ...props
}: ButtonProps) => {
  return (
    <SButton variant={variant} size={size} {...props}>
      {loading ? <Spinner /> : children}
    </SButton>
  );
};
