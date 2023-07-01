import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../config";

interface AdminNavState {
  navOpen: boolean
}

const initialState: AdminNavState = {
  navOpen: false
}

const adminNavSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setNavOpen: (state, action: PayloadAction<boolean>) => {
      state.navOpen = action.payload
    }
  }
})

export const { setNavOpen } = adminNavSlice.actions;
export default adminNavSlice.reducer;
export const selectAdmin = (state: RootState) => state.admin;
