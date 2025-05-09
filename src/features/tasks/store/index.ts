import { taskSlice } from "./task.slice";
import { validateTaskName } from "./task.thunk";

export const TaskActions = {
  ...taskSlice.actions,
  validateTaskName,
};

export * as TaskSelector from "./task.selector";
