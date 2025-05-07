import { useState } from "react";

import { useAppSelector } from "@/shared/store/types";
import {
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  UniqueIdentifier,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { SortTaskProps } from "../components/task-board/task-board.dnd";
import { MoveTaskProps, TBoardState } from "../store/task.types";

type Props = {
  onSortTask: (props: SortTaskProps) => void;
  onMoveTask: (props: MoveTaskProps) => void;
  columns: TBoardState["columns"];
};

export const useDndDragTaskEvents = ({
  onSortTask,
  onMoveTask,
  columns,
}: Props) => {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id);
  };

  function findContainer(id: string) {
    if (id in columns) return id;
    return Object.keys(columns).find((key) => columns[key].tasks.includes(id));
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { delta, over, active } = event;
    if (delta.x === 0 && delta.y === 0) return;
    if (!over?.id || !active?.id) return;

    // Find the containers
    const activeContainer = findContainer(String(active.id));
    const overContainer = findContainer(String(over.id));

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    const activeItems = columns[activeContainer].tasks;
    const overItems = columns[overContainer].tasks;

    const activeIndex = activeItems.findIndex((item) => item === active.id);
    const overIndex = overItems.findIndex((item) => item === over.id);

    let newIndex;
    if (over.id in columns) {
      newIndex = overItems.length + 1;
    } else {
      const isBelowLastItem = over && overIndex === overItems.length - 1;
      const modifier = isBelowLastItem ? 1 : 0;
      newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
    }

    onMoveTask({
      // Column where the task is currently located
      active: {
        id: String(active.id),
        containerId: activeContainer,
        index: activeIndex,
      },
      // Column where the task is being moved to
      over: {
        id: String(over.id),
        containerId: overContainer,
        index: newIndex,
      },
    });
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;

    const columnId = active.data.current?.columnId as string;

    if (active.id !== over.id) {
      const tasks = columns[columnId].tasks;
      const oldIdx = tasks.indexOf(String(active.id));
      const newIdx = tasks.indexOf(String(over.id));
      const sortedTasks = arrayMove(tasks, oldIdx, newIdx);

      onSortTask({
        columnId,
        tasks: sortedTasks,
      });
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  return {
    activeId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
  };
};
