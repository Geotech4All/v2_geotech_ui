export type OrganizationDataType = {
  __typename?: "OrganizationType";
  organizationId?: string | null;
  name: string;
  description?: string | null;
  logo?: {
    __typename?: "ImageType";
    url: string;
    imageId?: string | null;
    description?: string | null;
  } | null;
} | null | undefined;
