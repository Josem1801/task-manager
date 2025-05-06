import React, { forwardRef, useState } from "react";

import * as SInput from "@/ui/components/input-filed/input-field.styles";
import { Eye } from "@/ui/icons/eye";
import { EyeOff } from "@/ui/icons/eye-off";
import { ThemeType } from "@/ui/styled";
import { Variant } from "@testing-library/react";

import { InputField } from "../input-filed";
import { Input, InputWrapper, Label } from "../input-filed/input-field.styles";
import { ToggleButton } from "./input-password.styles";

export type InputPasswordProps = {
  label?: string;
  variant?: Variant;
  color?: keyof ThemeType["colors"];
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, variant = "default", color = "secondary", ...props }, ref) => {
    const [show, setShow] = useState(false);
    return (
      <SInput.InputWrapper>
        {label && <SInput.Label>{label}</SInput.Label>}
        <div style={{ position: "relative", width: "100%" }}>
          <SInput.Input
            ref={ref}
            color={color}
            {...props}
            type={show ? "text" : "password"}
          />
          <ToggleButton
            type="button"
            tabIndex={-1}
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {show ? <Eye /> : <EyeOff />}
          </ToggleButton>
        </div>
      </SInput.InputWrapper>
    );
  },
);

InputField.displayName = "InputPassword";
