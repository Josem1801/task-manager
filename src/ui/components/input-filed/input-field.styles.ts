import { ThemeType } from "@/ui/styled";
import styled from "styled-components";

export type Props = {
  variant?: "default";
  color?: keyof ThemeType["colors"];
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
  font-size: 1rem;
  height: 3.2rem;
  border-radius: 6px;
  color: ${({ theme, color }) => theme.colors[color || "secondary"]};
  outline: none;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0.5rem 0.75rem;
  background: transparent;
  transition: border 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
