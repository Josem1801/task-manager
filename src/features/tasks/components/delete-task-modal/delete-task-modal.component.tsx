import React from "react";

import { ModalConfirmation, ModalProps } from "@/ui/components/modal";

import { useDeleteTaskMutation } from "../../store/task.api";

type Props = {
  id: string;
  modal: ModalProps;
};

export const DeleteTaskModal = ({ id, modal }: Props) => {
  const [deleteTask, deleteTaskResult] = useDeleteTaskMutation();

  const handleDeleteTask = async () => {
    if (!id) return;

    try {
      await deleteTask(id).unwrap();
      modal.close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ModalConfirmation
      description="Are you sure you want to delete this task?"
      loading={deleteTaskResult.isLoading}
      modal={modal}
      onCancel={modal.close}
      onConfirm={handleDeleteTask}
      title="Delete Task"
    />
  );
};
