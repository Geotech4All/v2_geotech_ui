import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../config";
import type { UserStateType } from "@/components/common";

interface UserState {
  user?: UserStateType;
}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStateType>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
