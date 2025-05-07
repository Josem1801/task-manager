import type { Transform } from "@dnd-kit/utilities";
import styled, { css } from "styled-components";

export const DraggableContainer = styled.div<{
  pendingDelay?: boolean;
  dragging?: boolean;
  dragOverlay?: boolean;
  transform?: Transform | null;
}>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  transform: translate3d(
    ${({ transform }) => transform?.x ?? 0}px,
    ${({ transform }) => transform?.y ?? 0}px,
    0
  );
  ${({ pendingDelay }) =>
    pendingDelay &&
    css`
      animation: pending linear;
    `}

  ${({ dragging }) =>
    dragging &&
    css`
      z-index: 1;
      transition: none;
      opacity: 0.5;
      * {
        cursor: grabbing;
      }
    `}
`;
