import { ThemeType } from "@/ui/styled";
import styled from "styled-components";
import { css } from "styled-components";

export type Props = {
  variant?: "default";
  color?: keyof ThemeType["colors"];
  size?: keyof typeof sizeStyles;
};

const sizeStyles = {
  small: css`
    font-size: 0.9rem;
    padding: 0.2rem 0.4rem;
    height: 2.2rem;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
    height: 3.2rem;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 0.5rem 0.75rem;
    height: 4rem;
  `,
};

export const InputWrapper = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Input = styled.input<Props>`
  border-radius: 6px;
  color: ${({ theme, color }) => theme.colors[color || "secondary"]};
  outline: none;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: transparent;
  transition: border 0.2s;

  ${({ size }) => size && sizeStyles[size]}

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
