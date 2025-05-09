import React, { forwardRef, useState } from "react";

import * as SInput from "@/ui/components/input-filed/input-field.styles";
import { Eye } from "@/ui/icons/eye";
import { EyeOff } from "@/ui/icons/eye-off";
import { ThemeType } from "@/ui/styled";

import { ToggleButton } from "./input-password.styles";

export type InputPasswordProps = {
  label?: string;
  color?: keyof ThemeType["colors"];
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, color = "secondary", ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <SInput.InputWrapper>
        {label && <SInput.Label>{label}</SInput.Label>}
        <div style={{ position: "relative", width: "100%" }}>
          <SInput.Input
            color={color}
            ref={ref}
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
      </SInput.InputWrapper>
    );
  },
);

InputPassword.displayName = "InputPassword";
