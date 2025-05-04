import baseApi from "@/shared/store/api";
import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";

import { authSlice } from "@/features/auth/store/auth.slice";
import { taskSlice } from "@/features/tasks/store/task.slice";

export const rootReducer = combineReducers({
  api: baseApi.reducer,
  auth: authSlice.reducer,
  task: taskSlice.reducer,
});

export const storeConfig: ConfigureStoreOptions<
  ReturnType<typeof rootReducer>,
  ConfigureStoreOptions["preloadedState"]
> = {
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(baseApi.middleware),
};

export const store = configureStore(storeConfig);
