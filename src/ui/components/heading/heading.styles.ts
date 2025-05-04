import { ThemeType } from "@/ui/styled";
import styled, { css } from "styled-components";

import { HeadingProps } from "./heading.component";

const variantStyles = {
  h1: css`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  `,
  h2: css`
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.3;
  `,
  h3: css`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  `,
  h4: css`
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.4;
  `,
  header: css`
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.4;
  `,
};

export const Heading = styled.h1<HeadingProps>`
  margin: 0;
  ${({ variant }) => variantStyles[variant]}
  ${({ color, theme }) => `color: ${color || theme.colors.secondary}`}
`;
