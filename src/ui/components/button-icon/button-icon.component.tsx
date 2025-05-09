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
      isActive={isActive}
      onClick={onClick}
      size={size || "medium"}
      variant={variant}
    >
      {children}
    </S.ButtonIconContainer>
  );
};
