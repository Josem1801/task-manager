import React, { Fragment } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/store/types";
import { DraggableOverlay } from "@/ui/components/draggable";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { Task } from "@/features/tasks/components/task/task.component";
import { MoveTaskProps } from "@/features/tasks/store/task.types";

import { useDndDragTaskEvents } from "../../hooks/use-dnd-drag-task-events";
import { TaskActions, TaskSelector } from "../../store";
import { BoardLayout } from "./board.styles";

export type SortTaskProps = {
  columnId: string;
  tasks: string[];
};

interface Props {
  renderColumn?: (props: { columnId: string }) => React.ReactNode;
}

export function BoardDnD({ renderColumn }: Props) {
  const dispatch = useAppDispatch();

  const columns = useAppSelector(TaskSelector.getColumns);
  const tasks = useAppSelector(TaskSelector.getTasks);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const drag = useDndDragTaskEvents({
    columns,
    onMoveTask: (data: MoveTaskProps) => {
      dispatch(TaskActions.moveTask(data));
    },
    onSortTask: (data: SortTaskProps) => {
      dispatch(TaskActions.sortTask(data));
    },
  });

  return (
    <BoardLayout>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={drag.handleDragStart}
        onDragEnd={drag.handleDragEnd}
        onDragCancel={drag.handleDragCancel}
        onDragOver={drag.handleDragOver}
      >
        {Object.keys(columns).map((columnId) => (
          <Fragment key={columnId}>
            {renderColumn ? renderColumn({ columnId }) : null}
          </Fragment>
        ))}
        <DraggableOverlay>
          {drag.activeId ? <Task task={tasks[drag.activeId]} /> : null}
        </DraggableOverlay>
      </DndContext>
    </BoardLayout>
  );
}
