import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  data: any;
  children: React.ReactNode;
};

export const Sortable = ({ id, data, children }: Props) => {
  const {
    setNodeRef,
    listeners,
    isDragging,
    transform,
    transition,
    attributes,
  } = useSortable({
    id,
    data,
  });
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        opacity: isDragging ? 0.3 : 1,
        transform: CSS.Transform.toString(transform),
        transition,
      }}
    >
      {children}
    </div>
  );
};
