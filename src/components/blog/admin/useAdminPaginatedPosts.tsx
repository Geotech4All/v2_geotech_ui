"use client";
import { QueryAllPostsArgs, useAllPostsQuery } from "@/graphql/generated";
import React from "react";
import { PostEdgeDataType } from "../types";

export default function useAdminPaginatedPosts(
  variables: QueryAllPostsArgs = {},
) {
  const { after: initialAfter, ...rest } = variables;
  const [loadedMore, setLoadedMore] = React.useState(false);
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
    if (loadedMore) {
      setItems((curr) => new Set(Array.from(curr).concat(data?.posts?.edges)));
      setLoadedMore(false);
    } else {
      setItems(new Set(data?.posts?.edges));
    }
    setHasMore(Boolean(data?.posts?.pageInfo.hasNextPage));
  }, [data, loadedMore]);

  const loadMore = (cursor?: string) => {
    if (hasMore) {
      setLoadedMore(true);
      setAfter(cursor);
    }
  };
  return {
    fetching,
    items: Array.from(items.values()),
    loadMore,
    error,
    refetch,
  };
}
