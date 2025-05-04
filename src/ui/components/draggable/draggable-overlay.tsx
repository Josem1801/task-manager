import { createPortal } from "react-dom";

import { DragOverlay, useDndContext } from "@dnd-kit/core";
import type { DropAnimation } from "@dnd-kit/core";

import { dropAnimationConfig } from "./draggable.config";

interface Props {
  dropAnimation?: DropAnimation | null;
  component: React.ReactNode;
}

export function DraggableOverlay({
  dropAnimation = dropAnimationConfig,
  component,
}: Props) {
  const { active } = useDndContext();

  return createPortal(
    <DragOverlay dropAnimation={dropAnimation}>
      {active ? component : null}
    </DragOverlay>,
    document.body,
  );
}
