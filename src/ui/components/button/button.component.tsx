import React from "react";

import { Spinner } from "@/ui/icons/spinner";

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
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <SButton
      {...props}
      disabled={loading || disabled}
      size={size}
      variant={variant}
    >
      {loading ? <Spinner /> : children}
    </SButton>
  );
};
