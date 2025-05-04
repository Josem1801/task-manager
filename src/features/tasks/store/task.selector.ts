import { RootState } from "@/shared/store/types";
import { createSelector } from "@reduxjs/toolkit";

export const getColumns = createSelector(
  (state: RootState) => state.task.columns,
  (columns) => columns,
);

export const getTasks = createSelector(
  (state: RootState) => state.task.tasks,
  (tasks) => tasks,
);
