export type TagNodeDataType = {
  __typename?: "TagType";
  title: string;
  description?: string | null;
  category?: string | null;
  tagId?: string | null;
} | null | undefined;

export type TagEdgeDataType ={
  __typename?: "TagTypeEdge";
  cursor: string;
  node?: TagNodeDataType;
} | null
