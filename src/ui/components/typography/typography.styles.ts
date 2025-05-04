import styled, { css } from "styled-components";

import { TypographyProps } from "./typography.component";

const variantStyles = {
  small: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  `,
  medium: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
  `,
  large: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  `,
  xlarge: css`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
  `,
  xxlarge: css`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
  `,
};

export const Typography = styled.span<TypographyProps>`
  ${({ color, theme }) => `color: ${color || theme.colors.secondary}`}
  ${({ variant }) => variant && variantStyles[variant]}
  font-weight: ${({ weight }) => weight};
`;
