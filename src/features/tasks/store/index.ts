import { RootState } from "@/shared/store/types";
import { createSelector } from "@reduxjs/toolkit";

import { taskSlice } from "./task.slice";

export const TaskActions = {
  ...taskSlice.actions,
};

export * as TaskSelector from "./task.selector";
