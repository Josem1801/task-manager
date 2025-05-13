import { RootState } from "@/shared/store/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const validateTaskName = createAsyncThunk(
  "task/validateName",
  async (taskName: string, { getState, rejectWithValue }) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    const state = getState() as RootState;
    const existingTasks = Object.values(state.task.tasks);
    const isNameExists = existingTasks.some(
      (task) => task.name.toLowerCase() === taskName.toLowerCase(),
    );

    if (isNameExists) {
      return rejectWithValue("Task name already exists");
    }

    return true;
  },
);
