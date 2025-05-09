import React, { forwardRef, useState } from "react";

import * as S from "@/ui/components/input-filed/input-field.styles";
import { Eye } from "@/ui/icons/eye";
import { EyeOff } from "@/ui/icons/eye-off";

import { ToggleButton } from "./input-password.styles";

export type InputPasswordProps = {
  label?: string;
} & S.Props &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, size = "medium", error, color = "secondary", ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <S.InputWrapper>
        {label && <S.Label>{label}</S.Label>}
        <div style={{ position: "relative", width: "100%" }}>
          <S.Input
            color={color}
            error={error}
            ref={ref}
            size={size}
            {...props}
            type={show ? "text" : "password"}
          />
          <ToggleButton
            aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
            onClick={() => setShow((v) => !v)}
            tabIndex={-1}
            type="button"
          >
            {show ? <Eye /> : <EyeOff />}
          </ToggleButton>
        </div>
        <S.Error error={error}>{error}</S.Error>
      </S.InputWrapper>
    );
  },
);

InputPassword.displayName = "InputPassword";
