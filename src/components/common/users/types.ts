export type UserDataType = {
  __typename?: "UserType";
  fullName?: string | null;
  id: string;
  profile?: {
    __typename?: "ProfileType";
    image?: {
      __typename?: "ImageType";
      url: string;
      description?: string | null;
    } | null;
  } | null;
};
