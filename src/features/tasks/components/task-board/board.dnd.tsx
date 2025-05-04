import React, { useCallback, useState } from "react";

import { useBoolean } from "@/shared/hooks/use-boolean";
import { useDisclosure } from "@/shared/hooks/use-disclosure";
import { DraggableOverlay } from "@/ui/components/draggable";
import { Droppable } from "@/ui/components/droppable";
import { GridContainer } from "@/ui/components/grid-container";
import { Sortable } from "@/ui/components/sortable/surtable.component";
import {
  closestCenter,
  closestCorners,
  DndContext,
  DragEndEvent,
  DragStartEvent,
  pointerWithin,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";

import { BoardColumn } from "@/features/tasks/components/column/column.component";
import { Task } from "@/features/tasks/components/task/task.component";
import { TBoardState, TBoardTask } from "@/features/tasks/store/task.types";

import { useCreateTaskMutation } from "../../store/task.api";

export type MoveTaskProps = {
  columnId: string;
  taskId: string;
  newColumnId: string;
};

export type SortTaskProps = {
  columnId: string;
  tasks: string[];
};

interface Props {
  columns: TBoardState["columns"];
  tasks: TBoardState["tasks"];
  onMoveTask: (props: MoveTaskProps) => void;
  onSortTask: (props: SortTaskProps) => void;
  renderContainer?: (props: { children: React.ReactNode }) => React.ReactNode;
  renderTask?: (props: { task: TBoardTask }) => React.ReactNode;
  onAddTask: () => void;
}

export function BoardDnD({
  columns,
  tasks,
  onMoveTask,
  onSortTask,
  renderTask,
  onAddTask,
}: Props) {
  const [tempTask, setTempTask] = useState<TBoardTask | null>(null);
  const isDragging = useBoolean(false);
  const handleDragStart = ({ active }: DragStartEvent) => {
    setTempTask(tasks[active.id]);
    isDragging.setTrue();
  };
  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || !over.id) return;

    const { columnId } = active.data.current as { columnId: string };

    // If the task is being moved to a new column
    if (!over.data.current) {
      onMoveTask({
        columnId,
        taskId: String(active.id),
        newColumnId: String(over.id),
      });
      return isDragging.setFalse();
    }

    // Sorting tasks within the same column
    if (active.id !== over.id) {
      const tasks = columns[columnId].tasks;
      const oldIdx = tasks.indexOf(String(active.id));
      const newIdx = tasks.indexOf(String(over.id));
      const sortedTasks = arrayMove(tasks, oldIdx, newIdx);
      onSortTask({
        columnId,
        tasks: sortedTasks,
      });
      return isDragging.setFalse();
    }
    isDragging.setFalse();
    setTempTask(null);
  };

  const handleDragCancel = () => {
    setTempTask(null);
    isDragging.setFalse();
  };

  // const [addTask, taskMutation] = useCreateTaskMutation();
  // const addTaskDisclosure = useDisclosure();

  return (
    <DndContext
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <GridContainer columns={3}>
        {Object.keys(columns).map((columnId) => (
          <Droppable key={columnId} id={columnId} dragging={isDragging.value}>
            <BoardColumn column={columns[columnId]} onAddTask={onAddTask}>
              <SortableContext items={columns[columnId].tasks} key={columnId}>
                {columns[columnId].tasks.map((taskId: string) => {
                  const task = tasks[taskId];
                  return (
                    <Sortable
                      key={taskId}
                      id={taskId}
                      data={{ columnId, task }}
                    >
                      {renderTask ? renderTask({ task }) : <Task task={task} />}
                    </Sortable>
                  );
                })}
              </SortableContext>
            </BoardColumn>
          </Droppable>
        ))}
        <DraggableOverlay
          component={tempTask ? <Task task={tempTask} /> : null}
        />
      </GridContainer>
    </DndContext>
  );
}
