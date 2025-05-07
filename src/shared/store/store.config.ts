import baseApi from "@/shared/store/store.api";
import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { authSlice } from "@/features/auth/store/auth.slice";
import { taskSlice } from "@/features/tasks/store/task.slice";

import storage from "./storage.noob";
import { encryptCompressTransform } from "./store.transform";
import { RootState } from "./types";

export const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptCompressTransform],
  whitelist: ["auth", "task"],
};

export const rootReducer = combineReducers({
  api: baseApi.reducer,
  auth: authSlice.reducer,
  task: taskSlice.reducer,
});

export const persistedReducer = persistReducer<RootState>(
  persistConfig,
  rootReducer,
);

export const storeConfig = {
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(baseApi.middleware),
} satisfies ConfigureStoreOptions;

export const store = configureStore(storeConfig);
export const persistor = persistStore(store);
