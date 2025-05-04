import styled, { css } from "styled-components";

import { ButtonProps } from "./button.component";

const sizeStyles = {
  small: css`
    padding: 0.25rem 0.5rem;
  `,
  medium: css`
    padding: 0.5rem 1.25rem;
  `,
  large: css`
    padding: 0.75rem 1.5rem;
  `,
};

const variantStyles = {
  primary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    border: none;
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  `,
};

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border 0.2s;

  ${({ variant }) => variant && variantStyles[variant]}
  ${({ size }) => size && sizeStyles[size]}
  ${({ color, theme }) =>
    color && `color: ${theme.colors[color as keyof typeof theme.colors]};`}

  svg {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
