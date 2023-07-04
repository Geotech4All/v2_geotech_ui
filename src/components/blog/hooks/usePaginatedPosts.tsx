import { QueryAllPostsArgs, useAllPostsQuery } from "@/graphql/generated";
import React from "react";
import { PostEdgeDataType } from "../types";

export default function usePaginatedPosts(variables: QueryAllPostsArgs = {}) {
  const { after: initialAfter, ...rest } = variables;
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
    if (data?.posts?.edges) {
      setItems((curr) =>
        new Set(Array.from(curr.values()).concat(data.posts?.edges))
      );
      setHasMore(data.posts.pageInfo.hasNextPage);
    }
  }, [data]);

  const loadMore = (after?: string) => {
    if (hasMore) {
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
