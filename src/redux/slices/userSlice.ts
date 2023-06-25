import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../config";

type UserNode = {
  __typename?: "UserNode";
  fullName?: string | null;
  email: string;
  staff?: {
    __typename?: "StaffType";
    canCreatePost: boolean;
    canAlterPost: boolean;
    canDeletePost: boolean;
    canCreateUser: boolean;
    canAlterUser: boolean;
    canDeleteUser: boolean;
    canCreatePodcast: boolean;
    canAlterPodcast: boolean;
    canDeletePodcast: boolean;
    canCreateOpportunities: boolean;
    canUpdateOpportunities: boolean;
    canDeleteOpportunities: boolean;
    staffId?: string | null;
  } | null;
  profile?: {
    __typename?: "ProfileType";
    about?: string | null;
    profileId?: string | null;
    image?: {
      __typename?: "ImageType";
      description?: string | null;
      imageId?: string | null;
      url: string;
    } | null;
  } | null;
} | null | undefined;


interface UserState {
  user?: UserNode
}

const initialState: UserState = {}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserNode>) => {
      state.user = action.payload;
    }
  }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state: RootState) => state.user
