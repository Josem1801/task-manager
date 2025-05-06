import React, { forwardRef } from "react";

import { ThemeType } from "@/ui/styled";

import * as S from "./textarea.styles";

type Variant = "default" | "underline";

export type TextareaProps = {
  label?: string;
  variant?: Variant;
  color?: keyof ThemeType["colors"];
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, variant = "default", color = "secondary", ...props }, ref) => (
    <S.InputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Textarea ref={ref} variant={variant} color={color} {...props} />
    </S.InputWrapper>
  ),
);

Textarea.displayName = "Textarea";
