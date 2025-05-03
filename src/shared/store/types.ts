import { useDispatch, useSelector } from "react-redux";

import { ThunkDispatch } from "@reduxjs/toolkit";

import { store } from "./config";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
