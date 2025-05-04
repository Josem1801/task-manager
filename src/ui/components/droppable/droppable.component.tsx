import React from "react";

import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";

import { DroppableContainer } from "./droppable.styles";

interface Props {
  children: React.ReactNode;
  dragging: boolean;
  id: UniqueIdentifier;
}

export function Droppable({ children, id, dragging }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <DroppableContainer
      ref={setNodeRef}
      style={{
        opacity: isOver ? 0.5 : 1,
      }}
    >
      {children}
    </DroppableContainer>
  );
}
