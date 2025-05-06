import styled, { css } from "styled-components";

import { TextareaProps } from "./textarea.component";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.95rem;
  font-weight: 500;
`;

const variantStyles = {
  default: css`
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 0.5rem 0.75rem;
    background: transparent;
  `,
  underline: css`
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray};
    padding: 0.5rem 0;
    background: transparent;
  `,
};

export const Textarea = styled.textarea<TextareaProps>`
  color: ${({ theme, color }) => theme.colors[color || "secondary"]};
  ${({ variant }) => variant && variantStyles[variant]}
  font-size: 0.95rem;
  height: 8rem;
  border-radius: 6px;
  resize: none;
  outline: none;
  transition: border 0.2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
