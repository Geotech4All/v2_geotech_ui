import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./config";


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelection: TypedUseSelectorHook<RootState> = useSelector;
