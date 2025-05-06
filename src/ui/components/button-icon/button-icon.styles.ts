import styled from "styled-components";

const sizes = {
  small: "1.5rem",
  medium: "1.8rem",
  large: "2.5rem",
  xlarge: "3rem",
};

export type Props = {
  isActive?: boolean;
  variant?: "primary" | "secondary";
  size: keyof typeof sizes;
};

export const ButtonIconContainer = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  padding: 0.35rem;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
  background-color: ${({ theme }) => theme.colors.light};

  color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.primary : theme.colors.light};
    opacity: 0.6;
  }

  svg {
    width: 80%;
    height: 80%;
  }
`;
