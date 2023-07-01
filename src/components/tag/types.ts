export type TagNodeDataType =
  | {
    __typename?: "TagType";
    title: string;
    description?: string | null;
    category?: string | null;
    tagId?: string | null;
  }
  | null
  | undefined;

export type TagEdgeDataType = {
  __typename?: "TagTypeEdge";
  cursor: string;
  node?: TagNodeDataType;
} | null;

export type TagDataType =
  | {
    __typename?: "TagType";
    tagId?: string | null;
    title: string;
    description?: string | null;
  }
  | null
  | undefined;
