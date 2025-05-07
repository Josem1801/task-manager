import { persistor } from "@/shared/store/store.config";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { TaskActions } from "@/features/tasks/store";

import { AuthActions } from ".";

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(AuthActions.setLoading(true));

    thunkAPI.dispatch(AuthActions.logout());
    thunkAPI.dispatch(TaskActions.reset());

    thunkAPI.dispatch(AuthActions.setLoading(false));
  },
);
