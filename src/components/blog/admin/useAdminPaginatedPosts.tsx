"use client";
import { QueryAllPostsArgs, useAllPostsQuery } from "@/graphql/generated";
import React from "react";
import { PostEdgeDataType } from "../types";

export default function useAdminPaginatedPosts(
  variables: QueryAllPostsArgs = {},
) {
  const { after: initialAfter, ...rest } = variables;
  const [after, setAfter] = React.useState(initialAfter);
  const [{ fetching, data, error }, refetch] = useAllPostsQuery({
    variables: {
      after,
      ...rest,
    },
  });
  const [hasMore, setHasMore] = React.useState(false);
  const [items, setItems] = React.useState<Set<PostEdgeDataType>>(new Set());

  React.useEffect(() => {
    setItems((curr) => new Set(Array.from(curr).concat(data?.posts?.edges)));
    setHasMore(Boolean(data?.posts?.pageInfo.hasNextPage));
  }, [data]);

  const loadMore = (cursor?: string) => {
    if (hasMore) {
      setAfter(cursor);
    }
  };
  return {
    fetching,
    items: Array.from(items.values()),
    loadMore,
    error,
    refetch
  };
}
