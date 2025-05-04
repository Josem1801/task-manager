import React, { HTMLAttributes, PropsWithChildren } from "react";

import { ButtonIconContainer as SButtonIconContainer } from "./button-icon.styles";

type Props = {
  isActive?: boolean;
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
};

export const ButtonIcon = ({
  children,
  onClick,
  isActive,
  variant,
  size,
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement> & Props>) => {
  return (
    <SButtonIconContainer
      onClick={onClick}
      isActive={isActive}
      variant={variant}
      size={size}
    >
      {children}
    </SButtonIconContainer>
  );
};
