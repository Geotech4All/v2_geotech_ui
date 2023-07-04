import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../config";
import { UserStateType } from "@/components/common";

interface AdminNavState {
  navOpen: boolean;
  staff?: UserStateType;
}

const initialState: AdminNavState = {
  navOpen: false,
};

const adminNavSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setNavOpen: (state, action: PayloadAction<boolean>) => {
      state.navOpen = action.payload;
    },
    setAdminStaff: (state, action: PayloadAction<UserStateType>) => {
      state.staff = action.payload;
    },
  },
});

export const { setNavOpen, setAdminStaff } = adminNavSlice.actions;
export default adminNavSlice.reducer;
export const selectAdmin = (state: RootState) => state.admin;
