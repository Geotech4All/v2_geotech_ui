import { QueryAllPostsArgs, useAllPostsQuery } from "@/graphql/generated";
import React from "react";
import { PostEdgeDataType } from "../types";

export default function usePaginatedPosts(variables: QueryAllPostsArgs = {}) {
  const { after: initialAfter, ...rest } = variables;
  const [loadedMore, setLoadedMore] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(false);
  const [after, setAfter] = React.useState<string | undefined>(() =>
    initialAfter ? initialAfter : undefined
  );
  const [{ fetching, data, error }] = useAllPostsQuery({
    variables: {
      after,
      ...rest,
    },
  });
  const [items, setItems] = React.useState<Set<PostEdgeDataType>>(new Set());

  React.useEffect(() => {
    if (loadedMore) {
      if (data?.posts?.edges) {
        setItems((curr) =>
          new Set(Array.from(curr.values()).concat(data.posts?.edges))
        );
        setHasMore(data.posts.pageInfo.hasNextPage);
      }
    } else {
      if (data?.posts?.edges) {
        setItems((curr) =>
          new Set(Array.from(curr.values()).concat(data.posts?.edges))
        );
        setHasMore(data.posts.pageInfo.hasNextPage);
      }
    }
    setLoadedMore(false);
  }, [data]);

  const loadMore = (after?: string) => {
    if (hasMore) {
      setLoadedMore(true);
      setAfter(after);
    }
  };

  data?.posts?.edges;

  return {
    fetching,
    items: Array.from(items.values()),
    error,
    loadMore,
  };
}
