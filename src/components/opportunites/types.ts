export type OpportunityNodeDataType = {
    __typename?: "OpportunityType";
    content?: string | null;
    description?: string | null;
    lastUpdated: any;
    opportunityId?: string | null;
    title: string;
    location?: {
      __typename?: "LocationType";
      address?: string | null;
      country?: string | null;
      lastUpdated?: any | null;
      locationId?: string | null;
      state?: string | null;
      zipCode?: string | null;
    } | null;
    organization?: {
      __typename?: "OrganizationType";
      description?: string | null;
      organizationId?: string | null;
      name: string;
      logo?: {
        __typename?: "ImageType";
        description?: string | null;
        url: string;
        imageId?: string | null;
      } | null;
    } | null;
    tags?: Array<{
      __typename?: "TagType";
      title: string;
      description?: string | null;
      category?: string | null;
      tagId?: string | null;
    } | null> | null;
} | null;

export type OpportunityEdgeDataType = Array<{
    __typename?: "OpportunityTypeEdge";
    cursor: string;
    node?: {
      __typename?: "OpportunityType";
      content?: string | null;
      description?: string | null;
      lastUpdated: any;
      opportunityId?: string | null;
      title: string;
      location?: {
        __typename?: "LocationType";
        address?: string | null;
        country?: string | null;
        lastUpdated?: any | null;
        locationId?: string | null;
        state?: string | null;
        zipCode?: string | null;
      } | null;
      tags?: Array<{
        __typename?: "TagType";
        title: string;
        description?: string | null;
        category?: string | null;
        tagId?: string | null;
      } | null> | null;
      organization?: {
        __typename?: "OrganizationType";
        description?: string | null;
        organizationId?: string | null;
        name: string;
        logo?: {
          __typename?: "ImageType";
          description?: string | null;
          url: string;
          imageId?: string | null;
        } | null;
      } | null;
    } | null;
  } | null> | undefined;

export type OpportuntyConnectionDataType= {
  __typename?: "OpportunityTypeConnection";
  pageInfo: {
    __typename?: "PageInfo";
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };
  edges: OpportunityEdgeDataType;
} | null | undefined;
