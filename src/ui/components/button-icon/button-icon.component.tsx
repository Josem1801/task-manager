import React from "react";

import * as S from "./button-icon.styles";

type ButtonIconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & S.Props;

export const ButtonIcon = ({
  children,
  onClick,
  isActive,
  variant,
  size,
  ...props
}: ButtonIconProps) => {
  return (
    <S.ButtonIconContainer
      {...props}
      isActive={isActive}
      onClick={onClick}
      size={size || "medium"}
      variant={variant}
    >
      {children}
    </S.ButtonIconContainer>
  );
};
