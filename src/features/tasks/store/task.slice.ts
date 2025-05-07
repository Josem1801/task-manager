import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { taskApi } from "./task.api";
import { MoveTaskProps, TBoardState, TBoardTask } from "./task.types";

const initialState: TBoardState = {
  tasks: {},
  columns: {
    "col-pending": {
      id: "col-pending",
      title: "Pending",
      tasks: [],
    },
    "col-in-progress": {
      id: "col-in-progress",
      title: "In Progress",
      tasks: [],
    },
    "col-done": {
      id: "col-done",
      title: "Done",
      tasks: [],
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
    moveTask: (state, action: PayloadAction<MoveTaskProps>) => {
      const { over, active } = action.payload;
      // remove the task from the active column
      const column = state.columns[active.containerId];
      const taskIndex = column.tasks.indexOf(active.id);
      column.tasks.splice(taskIndex, 1);

      // add the task to the over column
      const overColumn = state.columns[over.containerId];
      overColumn.tasks.splice(over.index, 0, active.id);

      state.columns = {
        ...state.columns,
        [active.containerId]: column,
        [over.containerId]: overColumn,
      };
    },
    sortTask: (state, action) => {
      const { tasks, columnId } = action.payload;
      if (!state.columns[columnId]) return;
      state.columns[columnId].tasks = tasks;
    },
    updateTask: (state, action: PayloadAction<TBoardTask>) => {
      const task = action.payload;
      if (!state.tasks[task.id]) return;
      state.tasks[task.id] = task;
    },
    reset: () => initialState,
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
            {} as TBoardState["tasks"],
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
          console.log(action.payload);
          delete state.tasks[action.payload];
        },
      )
      .addMatcher(
        taskApi.endpoints.createTask.matchFulfilled,
        (state, action) => {
          console.log(action.payload);
          state.tasks[action.payload.id] = action.payload;
          state.columns[action.payload.columnId].tasks.push(action.payload.id);
        },
      );
  },
});
