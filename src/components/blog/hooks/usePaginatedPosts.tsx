import { QueryAllPostsArgs, useAllPostsQuery } from "@/graphql/generated";
import React from "react";
import { PostEdgeDataType } from "../types";

export default function usePaginatedPosts(variables: QueryAllPostsArgs = {}) {
  const { after: initialAfter, ...rest } = variables;
  const [loadedMore, setLoadedMore] = React.useState(false);
  const [after, setAfter] = React.useState<string | undefined>(() =>
    initialAfter ? initialAfter : undefined
  );
  const [{ fetching, data, error }] = useAllPostsQuery({
    variables: {
      after,
      ...rest,
    },
  });
  const [items, setItems] = React.useState<PostEdgeDataType[]>([]);

  React.useEffect(() => {
    if (loadedMore) {
      if (data?.posts?.edges) {
        setItems((curr) => curr.concat(data.posts?.edges));
      }
    } else {
      if (data?.posts?.edges) {
        setItems(data.posts.edges);
      }
    }
  }, [data]);

  const loadMore = (after?: string) => {
    setAfter(after);
    setLoadedMore(true);
  };

  data?.posts?.edges;

  return {
    fetching,
    items,
    error,
    loadMore,
  };
}
