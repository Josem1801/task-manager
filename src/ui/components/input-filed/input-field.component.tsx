import React, { forwardRef } from "react";

import * as S from "./input-field.styles";

type InputFieldProps = {
  label?: string;
} & S.Props &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      variant = "default",
      color = "secondary",
      size = "medium",
      style,
      ...props
    },
    ref,
  ) => (
    <S.InputWrapper style={style}>
      {label && <S.Label>{label}</S.Label>}
      <S.Input
        color={color}
        ref={ref}
        size={size}
        variant={variant}
        {...props}
      />
    </S.InputWrapper>
  ),
);

InputField.displayName = "InputField";
