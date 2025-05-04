import { createSlice } from "@reduxjs/toolkit";

import { taskApi } from "./task.api";
import { BoardState, Task } from "./task.types";

const initialState: BoardState = {
  tasks: {
    "1": {
      id: "1",
      name: "Task 1",
      description: "Description 1",
      isFavorite: false,
      createdAt: "2021-01-01",
    },
    "2": {
      id: "2",
      name: "Task 2",
      description: "Description 2",
      isFavorite: false,
      createdAt: "2021-01-01",
    },
    "3": {
      id: "3",
      name: "Task 3",
      description: "Description 3",
      isFavorite: false,
      createdAt: "2021-01-01",
    },
    "4": {
      id: "4",
      name: "Task 4",
      description: "Description 4",
      isFavorite: false,
      createdAt: "2021-01-01",
    },
    "5": {
      id: "5",
      name: "Task 5",
      description: "Description 5",
      isFavorite: false,
      createdAt: "2021-01-01",
    },
  },
  columns: {
    "col-pending": {
      id: "col-pending",
      title: "Pending",
      tasks: ["1"],
    },
    "col-in-progress": {
      id: "col-in-progress",
      title: "In Progress",
      tasks: ["2"],
    },
    "col-done": {
      id: "col-done",
      title: "Done",
      tasks: ["3", "4", "5"],
    },
  },
  isLoading: false,
  error: null,
  editingTaskId: {},
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    moveTask: (state, action) => {
      const { columnId, taskId, newColumnId } = action.payload;

      state.columns[columnId].tasks = state.columns[columnId].tasks.filter(
        (id) => id !== taskId,
      );
      state.columns[newColumnId].tasks.push(taskId);
    },
    sortTask: (state, action) => {
      const { tasks, columnId } = action.payload;
      if (!state.columns[columnId]) return;
      state.columns[columnId].tasks = tasks;
    },
  },
  extraReducers: (builder) => {
    // update the tasks and columns
    builder
      .addMatcher(
        taskApi.endpoints.getTasks.matchFulfilled,
        (state, action) => {
          state.tasks = action.payload.reduce(
            (acc, task) => {
              acc[task.id] = task;
              return acc;
            },
            {} as BoardState["tasks"],
          );
        },
      )
      .addMatcher(
        taskApi.endpoints.updateTask.matchFulfilled,
        (state, action) => {
          state.tasks[action.payload.id] = action.payload;
        },
      )
      .addMatcher(
        taskApi.endpoints.deleteTask.matchFulfilled,
        (state, action) => {
          delete state.tasks[action.payload.id];
        },
      )
      .addMatcher(
        taskApi.endpoints.createTask.matchFulfilled,
        (state, action) => {
          state.tasks[action.payload.id] = action.payload;
        },
      );
  },
});
