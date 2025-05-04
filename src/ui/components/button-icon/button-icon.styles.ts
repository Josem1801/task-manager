import styled from "styled-components";

type Props = {
  isActive?: boolean;
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
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
  aspect-ratio: 1;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.light};

  color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant === "primary" ? theme.colors.primary : theme.colors.light};
    opacity: 0.6;
  }
`;
