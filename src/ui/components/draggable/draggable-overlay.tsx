import { createPortal } from "react-dom";

import { DragOverlay, useDndContext } from "@dnd-kit/core";
import type { DropAnimation } from "@dnd-kit/core";

import { dropAnimationConfig } from "./draggable.config";

interface Props {
  dropAnimation?: DropAnimation | null;
  children: React.ReactNode;
}

export function DraggableOverlay({
  dropAnimation = dropAnimationConfig,
  children,
}: Props) {
  return createPortal(
    <DragOverlay dropAnimation={dropAnimation}>{children}</DragOverlay>,
    document.body,
  );
}
