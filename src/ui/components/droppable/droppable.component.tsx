import React from "react";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type DroppableProps = {
  id: string;
  items: string[];
  children: React.ReactNode;
};

export const Droppable = (props: DroppableProps) => {
  const { id, items, children } = props;
  const { setNodeRef } = useDroppable({
    id,
    data: {
      id,
    },
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef}>{children}</div>
    </SortableContext>
  );
};
