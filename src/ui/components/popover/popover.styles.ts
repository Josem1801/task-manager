import styled from "styled-components";

type Props = {
  isOpen: boolean;
};

export const PopoverContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const PopoverContent = styled.div<Props>`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 999;
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 4px 0;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  margin: 4px;
`;
