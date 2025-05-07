import { HeartFill } from "@/ui/icons/heart-fill";
import { HeartOutline } from "@/ui/icons/heart-outline";
import styled, { keyframes } from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: fit-content;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeartAnimation = keyframes`
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const HeartOutlineAnimated = styled(HeartOutline)`
  animation: ${HeartAnimation} 0.5s ease-in-out;
`;

export const HeartFillAnimated = styled(HeartFill)`
  animation: ${HeartAnimation} 0.5s ease-in-out;
  fill: #ff0000;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
