import styled, { css } from "styled-components";

import { TypographyProps } from "./typography.component";

const variantStyles = {
  body1: css`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  `,
  body2: css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.43;
  `,
  caption: css`
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.66;
  `,
  overline: css`
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  `,
};

export const Typography = styled.span<TypographyProps>`
  ${({ color, theme }) => `color: ${color || theme.colors.secondary}`}
  ${({ variant }) => variant && variantStyles[variant]}
`;
