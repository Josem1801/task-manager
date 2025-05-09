import React, { forwardRef } from "react";

import type { DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";

import { DraggableContainer } from "./draggable.styles";

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

interface Props {
  axis?: Axis;
  dragOverlay?: boolean;
  dragging?: boolean;
  handle?: boolean;
  label?: string;
  listeners?: DraggableSyntheticListeners;
  transform?: Transform | null;
  isPendingDelay?: boolean;
  children?: React.ReactNode;
}

export const Draggable = forwardRef<HTMLDivElement, Props>(function Draggable(
  { dragOverlay, dragging, transform, isPendingDelay = false, ...props },
  ref,
) {
  return (
    <DraggableContainer
      dragging={dragging}
      dragOverlay={dragOverlay}
      pendingDelay={isPendingDelay}
      ref={ref}
      style={{
        opacity: dragging ? 0.5 : 1,
      }}
      transform={transform}
      {...props}
    >
      {props.children}
    </DraggableContainer>
  );
});
