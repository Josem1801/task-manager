import React, { useMemo } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "@/shared/store/types";
import { Button } from "@/ui/components/button";
import { InputField } from "@/ui/components/input-filed";
import { Modal, ModalProps } from "@/ui/components/modal";
import { Textarea } from "@/ui/components/textarea";
import { yupResolver } from "@hookform/resolvers/yup";

import { TaskActions } from "../../store";
import { useUpdateTaskMutation } from "../../store/task.api";
import { TBoardTask } from "../../store/task.types";
import { SForm } from "./craete-task-modal.styles";
import { CreateTaskSchema, createTaskSchema } from "./create-task-modal.const";

type Props = {
  modal: ModalProps;
  defaultValues?: TBoardTask | null;
};

export const UpdateTaskModal = ({ modal, defaultValues }: Props) => {
  const dispatch = useAppDispatch();

  const [updateTask, updateTaskResult] = useUpdateTaskMutation();
  const methods = useForm<CreateTaskSchema>({
    resolver: yupResolver(createTaskSchema),
    values: useMemo(() => {
      if (!defaultValues) return undefined;

      return {
        name: defaultValues.name,
        description: defaultValues.description || "",
      };
    }, [defaultValues]),
  });

  const isUpdating =
    updateTaskResult.isLoading || methods.formState.isSubmitting;

  const handleSubmit = methods.handleSubmit(async (data) => {
    if (!defaultValues) return;

    try {
      await dispatch(TaskActions.validateTaskName(data.name)).unwrap();
    } catch (error) {
      const message = error as string;

      return methods.setError("name", { message });
    }

    try {
      await updateTask({
        ...defaultValues,
        ...data,
      });
      modal.close();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Modal {...modal}>
      <SForm onSubmit={handleSubmit}>
        <InputField
          error={methods.formState.errors.name?.message}
          {...methods.register("name")}
          label="Task name"
        />
        <Textarea {...methods.register("description")} label="Description" />
        <Button loading={isUpdating} type="submit">
          {isUpdating ? "Updating..." : "Update"}
        </Button>
      </SForm>
    </Modal>
  );
};
