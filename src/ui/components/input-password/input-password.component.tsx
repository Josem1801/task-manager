import React, { forwardRef, useState } from "react";

import { ThemeType } from "@/ui/styled";

import {
  InputWrapper,
  Label,
  Input as SInput,
  ToggleButton,
} from "./input-password.styles";

type Variant = "default" | "underline";

export type InputPasswordProps = {
  label?: string;
  variant?: Variant;
  color?: keyof ThemeType["colors"];
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, variant = "default", color = "secondary", ...props }, ref) => {
    const [show, setShow] = useState(false);

    return (
      <InputWrapper>
        {label && <Label>{label}</Label>}
        <div style={{ position: "relative", width: "100%" }}>
          <SInput
            {...props}
            ref={ref}
            variant={variant}
            color={color}
            style={{ paddingRight: "2.5rem" }}
            type={show ? "text" : "password"}
          />
          <ToggleButton
            type="button"
            tabIndex={-1}
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {show ? "🙈" : "👁️"}
          </ToggleButton>
        </div>
      </InputWrapper>
    );
  },
);

InputPassword.displayName = "InputPassword";
