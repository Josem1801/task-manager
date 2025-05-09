import React, { Fragment, useMemo } from "react";

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
import { MoveTaskProps, TBoardState } from "@/features/tasks/store/task.types";

import { useDndDragTaskEvents } from "../../hooks/use-dnd-drag-task-events";
import { TaskActions, TaskSelector } from "../../store";
import { BoardLayout } from "./board.styles";

export type SortTaskProps = {
  columnId: string;
  tasks: string[];
};

type RenderColumnProps = {
  columnId: string;
  columns: TBoardState["columns"];
  tasks: TBoardState["tasks"];
};

interface Props {
  renderColumn?: (props: RenderColumnProps) => React.ReactNode;
}

export function BoardDnD({ renderColumn }: Props) {
  const dispatch = useAppDispatch();

  const columns = useAppSelector(TaskSelector.getColumns);
  const tasks = useAppSelector(TaskSelector.getTasks);

  const columnsCache = useMemo(() => columns, [columns]);
  const tasksCache = useMemo(() => tasks, [tasks]);

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
    columns: columnsCache,
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
        collisionDetection={closestCorners}
        onDragCancel={drag.handleDragCancel}
        onDragEnd={drag.handleDragEnd}
        onDragOver={drag.handleDragOver}
        onDragStart={drag.handleDragStart}
        sensors={sensors}
      >
        {Object.keys(columnsCache).map((columnId) => (
          <Fragment key={columnId}>
            {renderColumn
              ? renderColumn({
                  columnId,
                  columns: columnsCache,
                  tasks: tasksCache,
                })
              : null}
          </Fragment>
        ))}
        <DraggableOverlay>
          {drag.activeId ? <Task task={tasks[drag.activeId]} /> : null}
        </DraggableOverlay>
      </DndContext>
    </BoardLayout>
  );
}
