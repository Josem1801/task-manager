import React, { forwardRef } from "react";

import * as S from "./input-field.styles";

type InputFieldProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement> &
  S.Props;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, variant = "default", color = "secondary", ...props }, ref) => (
    <S.InputWrapper>
      {label && <S.Label>{label}</S.Label>}
      <S.Input color={color} ref={ref} variant={variant} {...props} />
    </S.InputWrapper>
  ),
);

InputField.displayName = "InputField";
