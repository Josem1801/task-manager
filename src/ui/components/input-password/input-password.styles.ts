import styled, { css } from "styled-components";

import { InputPasswordProps } from "./input-password.component";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

const variantStyles = {
  default: css`
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 4px;
    padding: 0.5rem 0.75rem;
    background: ${({ theme }) => theme.colors.primary};
  `,
  underline: css`
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0;
    padding: 0.5rem 0;
    background: transparent;
  `,
};

export const Input = styled.input<InputPasswordProps>`
  font-size: 1rem;
  color: ${({ theme, color }) => theme.colors[color || "secondary"]};
  outline: none;
  width: 100%;
  ${({ variant }) => variant && variantStyles[variant]}
  transition: border 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0;
  outline: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
