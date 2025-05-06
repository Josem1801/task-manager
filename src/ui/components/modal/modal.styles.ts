import styled from "styled-components";

import { sizes } from "./modal.component";

type Props = {
  isOpen: boolean;
  size?: keyof typeof sizes;
};

export const ModalContent = styled.div<Pick<Props, "size">>`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 10px;
  padding: 3%;
  height: auto;
  aspect-ratio: inherit;
`;

export const ModalContainer = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  z-index: 1000;
  display: flex;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.3s ease-in-out;
  ${ModalContent} {
    margin: auto;
    width: ${({ size }) => sizes[size || "medium"]};
  }
`;
