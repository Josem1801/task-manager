import React, { forwardRef } from "react";

import { ThemeType } from "@/ui/styled";

import { InputWrapper, Label, Input as SInput } from "./input-field.styles";

type Variant = "default" | "underline";

export type InputFieldProps = {
  label?: string;
  variant?: Variant;
  color?: keyof ThemeType["colors"];
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, variant = "default", color = "secondary", ...props }, ref) => (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <SInput ref={ref} variant={variant} color={color} {...props} />
    </InputWrapper>
  ),
);

InputField.displayName = "InputField";
