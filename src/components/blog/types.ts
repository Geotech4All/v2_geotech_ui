export type PostNodeDataType =
  | {
    __typename?: "PostType";
    abstract?: string | null;
    title: string;
    views: number;
    postId?: string | null;
    readLength?: number | null;
    likes: number;
    lastUpdated: unknown;
    author: {
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
    coverPhoto?: {
      __typename?: "ImageType";
      description?: string | null;
      url: string;
    } | null;
  }
  | null
  | undefined;

export type PostEdgeDataType =
  | {
    __typename?: "PostTypeEdge";
    cursor: string;
    node?: PostNodeDataType;
  }
  | null
  | undefined;

export type PostConnectionDataType = {
  __typename?: "Query";
  posts?: {
    __typename?: "PostTypeConnection";
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor?: string | null;
      endCursor?: string | null;
    };
    edges: PostEdgeDataType[];
  } | null;
} | undefined;
