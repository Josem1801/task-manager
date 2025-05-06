import React, { HTMLAttributes, PropsWithChildren } from "react";

import * as S from "./button-icon.styles";

export const ButtonIcon = ({
  children,
  onClick,
  isActive,
  variant,
  size,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLButtonElement> & Partial<S.Props>>) => {
  return (
    <S.ButtonIconContainer
      {...props}
      onClick={onClick}
      isActive={isActive}
      variant={variant}
      size={size || "medium"}
    >
      {children}
    </S.ButtonIconContainer>
  );
};
