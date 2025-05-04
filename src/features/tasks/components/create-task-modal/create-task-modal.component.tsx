import React from "react";
import { Form, useForm } from "react-hook-form";

import { Button } from "@/ui/components/button";
import { InputField } from "@/ui/components/input-filed";
import { Modal } from "@/ui/components/modal";
import { yupResolver } from "@hookform/resolvers/yup";

import { useCreateTaskMutation } from "../../store/task.api";
import { createTaskSchema } from "./craete-task-modal.const";
import { SForm } from "./craete-task-modal.styles";

type Props = {
  modal: {
    open: boolean;
    close: () => void;
    toggle: () => void;
  };
};

export const CreateTaskModal = ({ modal }: Props) => {
  const [createTask, createTaskResult] = useCreateTaskMutation();

  const methods = useForm({
    resolver: yupResolver(createTaskSchema),
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    try {
      await createTask(data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Modal {...modal}>
      <SForm onSubmit={onSubmit}>
        <InputField name="name" label="Name" />
        <InputField name="description" label="Description" />
        <InputField name="columnId" label="Column" />
        <Button type="submit" loading={createTaskResult.isLoading}>
          Create
        </Button>
      </SForm>
    </Modal>
  );
};
