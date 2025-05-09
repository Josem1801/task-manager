import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/ui/components/button";
import { InputField } from "@/ui/components/input-filed";
import { Modal, ModalProps } from "@/ui/components/modal";
import { Textarea } from "@/ui/components/textarea";
import { yupResolver } from "@hookform/resolvers/yup";

import { TBoardTask } from "../../store/task.types";
import { SForm } from "./craete-task-modal.styles";
import { CreateTaskSchema, createTaskSchema } from "./create-task-modal.const";

type Props = {
  modal: ModalProps;
  loading: boolean;
  defaultValues?: TBoardTask | null;
  onSubmit: (data: CreateTaskSchema) => void;
};

export const CreateTaskModal = ({
  modal,
  onSubmit,
  loading,
  defaultValues,
}: Props) => {
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

  const handleSubmit = methods.handleSubmit(onSubmit);

  useEffect(() => {
    if (!methods.formState.isSubmitSuccessful) return;
    methods.reset({
      name: "",
      description: "",
    });
  }, [methods, methods.formState.isSubmitSuccessful]);

  return (
    <Modal {...modal}>
      <SForm onSubmit={handleSubmit}>
        <InputField {...methods.register("name")} label="Task name" />
        <Textarea {...methods.register("description")} label="Description" />
        <Button loading={loading} type="submit">
          {defaultValues ? "Update" : "Create"}
        </Button>
      </SForm>
    </Modal>
  );
};
