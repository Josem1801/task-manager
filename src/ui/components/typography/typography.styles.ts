import styled, { css } from "styled-components";

import { TypographyProps } from "./typography.component";

const weights = {
  normal: 400,
  semibold: 600,
  bold: 700,
};

const variantStyles = {
  small: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  `,
  medium: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
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
  ${({ color, theme }) => `color: ${theme.colors[color || "secondary"]}`};
  ${({ variant }) => variant && variantStyles[variant]};
  font-weight: ${({ weight }) => weights[weight || "normal"]};
`;
