export type UserStateType = {
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
