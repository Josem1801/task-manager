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

export const getTaskNames = createSelector(
  (state: RootState) => state.task.tasks,
  (tasks) => Object.values(tasks).map((task) => task.name),
);

export const isTaskNameExists = createSelector(
  [getTaskNames],
  (taskNames) => (name: string) => taskNames.includes(name),
);
