import React, { Fragment, useState } from "react";

import { useDisclosure } from "@/shared/hooks/use-disclosure";
import { useAppDispatch } from "@/shared/store/types";
import { Droppable } from "@/ui/components/droppable";
import { Sortable } from "@/ui/components/sortable";

import { BoardColumn } from "@/features/tasks/components/column";
import { CreateTaskModal } from "@/features/tasks/components/create-task-modal";
import { Task } from "@/features/tasks/components/task";
import { TaskActions } from "@/features/tasks/store";
import { TBoardTask } from "@/features/tasks/store/task.types";

import { DeleteTaskModal } from "../delete-task-modal";
import { UpdateTaskModal } from "../update-task-modal";
import { BoardDnD } from "./task-board.dnd";

export const TaskBoard = () => {
  const [selectedTask, setSelectedTask] = useState<TBoardTask | null>(null);
  const [columnId, setColumnId] = useState<string>("");

  const createTaskModal = useDisclosure();
  const updateTaskModal = useDisclosure();
  const deleteTaskModal = useDisclosure();

  const dispatch = useAppDispatch();

  const handleFavoriteTask = (task: TBoardTask) => {
    dispatch(TaskActions.updateTask(task));
  };

  const handleEditTaskModal = (task: TBoardTask) => {
    setSelectedTask(task);
    updateTaskModal.open();
  };

  const handleAddTaskModal = (columnId: string) => {
    setColumnId(columnId);
    createTaskModal.open();
  };

  const handleDeleteTaskModal = (data: TBoardTask) => {
    setSelectedTask(data);
    deleteTaskModal.open();
  };

  const handleEditColumnName = ({
    id,
    title,
  }: {
    id: string;
    title: string;
  }) => {
    dispatch(
      TaskActions.updateColumnName({
        id,
        title,
      }),
    );
  };

  return (
    <Fragment>
      <BoardDnD
        renderColumn={({ columnId, columns, tasks }) => (
          <Droppable
            id={columnId}
            items={columns[columnId].tasks}
            key={columnId}
          >
            <BoardColumn
              column={columns[columnId]}
              onAddTask={() => handleAddTaskModal(columnId)}
              onUpdateColumnName={handleEditColumnName}
            >
              {columns[columnId].tasks.map((taskId: string) => (
                <Sortable id={taskId} key={taskId}>
                  <Task
                    onDelete={handleDeleteTaskModal}
                    onEdit={handleEditTaskModal}
                    onFavorite={handleFavoriteTask}
                    task={tasks[taskId]}
                  />
                </Sortable>
              ))}
            </BoardColumn>
          </Droppable>
        )}
      />
      {/* Modals */}
      <CreateTaskModal columnId={columnId} modal={createTaskModal} />
      <UpdateTaskModal defaultValues={selectedTask} modal={updateTaskModal} />
      {selectedTask ? (
        <DeleteTaskModal id={selectedTask.id} modal={deleteTaskModal} />
      ) : null}
    </Fragment>
  );
};
