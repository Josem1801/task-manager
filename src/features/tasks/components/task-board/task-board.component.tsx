import React, { Fragment, useState } from "react";

import { useDisclosure } from "@/shared/hooks/use-disclosure";
import { useAppDispatch, useAppSelector } from "@/shared/store/types";
import { Droppable } from "@/ui/components/droppable";
import { ModalConfirmation } from "@/ui/components/modal";
import { Sortable } from "@/ui/components/sortable";

import { AuthSelector } from "@/features/auth/store";
import { BoardColumn } from "@/features/tasks/components/column";
import {
  CreateTaskModal,
  CreateTaskSchema,
} from "@/features/tasks/components/create-task-modal";
import { Task } from "@/features/tasks/components/task";
import { TaskActions, TaskSelector } from "@/features/tasks/store";
import {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "@/features/tasks/store/task.api";
import { TBoardTask } from "@/features/tasks/store/task.types";

import { BoardDnD } from "./board.dnd";

export const TaskBoard = () => {
  const [selectedTask, setSelectedTask] = useState<TBoardTask | null>(null);
  const [columnId, setColumnId] = useState<string>("");

  const createTaskModal = useDisclosure();
  const updateTaskModal = useDisclosure();
  const deleteTaskModal = useDisclosure();

  const dispatch = useAppDispatch();
  const profile = useAppSelector(AuthSelector.getProfile);
  const columns = useAppSelector(TaskSelector.getColumns);
  const tasks = useAppSelector(TaskSelector.getTasks);

  const [createTask, createTaskResult] = useCreateTaskMutation();
  const [updateTask, updateTaskResult] = useUpdateTaskMutation();
  const [deleteTask, deleteTaskResult] = useDeleteTaskMutation();

  const handleAddTask = async (data: CreateTaskSchema) => {
    try {
      await createTask({
        createdBy: String(profile?.id),
        isFavorite: false,
        columnId,
        ...data,
      });
      createTaskModal.close();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditTask = async (data: CreateTaskSchema) => {
    if (!selectedTask) return;
    try {
      await updateTask({
        ...selectedTask,
        ...data,
      });
      updateTaskModal.close();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTask = async () => {
    if (!selectedTask) return;
    try {
      await deleteTask(selectedTask.id).unwrap();
      deleteTaskModal.close();
    } catch (error) {
      console.error(error);
    }
  };

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
  return (
    <Fragment>
      <BoardDnD
        renderColumn={({ columnId }) => (
          <Droppable
            id={columnId}
            key={columnId}
            items={columns[columnId].tasks}
          >
            <BoardColumn
              column={columns[columnId]}
              onAddTask={() => handleAddTaskModal(columnId)}
            >
              {columns[columnId].tasks.map((taskId: string) => (
                <Sortable key={taskId} id={taskId} data={{ columnId }}>
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
      <CreateTaskModal
        modal={createTaskModal}
        onSubmit={handleAddTask}
        loading={createTaskResult.isLoading}
      />
      <CreateTaskModal
        modal={updateTaskModal}
        onSubmit={handleEditTask}
        loading={updateTaskResult.isLoading}
        defaultValues={selectedTask}
      />
      <ModalConfirmation
        modal={deleteTaskModal}
        title="Delete Task"
        description="Are you sure you want to delete this task?"
        onConfirm={handleDeleteTask}
        onCancel={deleteTaskModal.close}
        loading={deleteTaskResult.isLoading}
      />
    </Fragment>
  );
};
