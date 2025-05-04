import React from "react";

import { useDisclosure } from "@/shared/hooks/use-disclosure";
import { useAppDispatch, useAppSelector } from "@/shared/store/types";

import { TaskActions, TaskSelector } from "../../store";
import { useCreateTaskMutation } from "../../store/task.api";
import { CreateTaskModal } from "../create-task-modal/create-task-modal.component";
import { Task } from "../task/task.component";
import { BoardDnD, MoveTaskProps, SortTaskProps } from "./board.dnd";

export const TaskBoard = () => {
  const columns = useAppSelector(TaskSelector.getColumns);
  const tasks = useAppSelector(TaskSelector.getTasks);
  const modal = useDisclosure();
  const dispatch = useAppDispatch();

  const handleAddTask = () => modal.open();

  const onMoveTask = (props: MoveTaskProps) => {
    dispatch(TaskActions.moveTask(props));
  };

  const onSortTask = (props: SortTaskProps) => {
    dispatch(TaskActions.sortTask(props));
  };

  return (
    <>
      <BoardDnD
        onAddTask={handleAddTask}
        renderTask={({ task }) => <Task task={task} />}
        columns={columns}
        tasks={tasks}
        onMoveTask={onMoveTask}
        onSortTask={onSortTask}
      />
      <CreateTaskModal
        modal={{
          open: modal.opened,
          close: modal.close,
          toggle: modal.toggle,
        }}
      />
    </>
  );
};
