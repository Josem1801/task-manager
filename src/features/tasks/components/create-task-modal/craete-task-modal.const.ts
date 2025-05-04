import * as yup from "yup";

export const createTaskSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  columnId: yup.string().required("Column is required"),
});

export type CreateTaskSchema = yup.InferType<typeof createTaskSchema>;
