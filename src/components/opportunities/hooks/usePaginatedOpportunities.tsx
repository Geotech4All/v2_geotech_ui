"use client";
import React from "react";
import {
  QueryOpportunitiesArgs,
  useOpportunitiesQuery,
} from "@/graphql/generated";
import { OpportunityEdgeDataType } from "../types";

export default function usePaginatedOpportunites(
  variables: QueryOpportunitiesArgs = {},
) {
  const { after: initialAfter, ...rest } = variables;
  const [loadedMore, setLoadedMore] = React.useState(false);
  const [after, setAfter] = React.useState<string | undefined>(
    initialAfter ?? undefined,
  );
  const [hasMore, setHasMore] = React.useState(false);
  const [{ data, fetching, error }, refetch] = useOpportunitiesQuery({
    variables: {
      after,
      ...rest,
    },
  });
  const [items, setItems] = React.useState<Set<OpportunityEdgeDataType>>(
    new Set(),
  );

  React.useEffect(() => {
    if (data?.opportunities?.edges) {
      if (loadedMore) {
        setItems((curr) =>
          new Set(Array.from(curr).concat(data?.opportunities?.edges))
        );
        setLoadedMore(false);
      } else {
        setItems(new Set(data.opportunities?.edges));
      }
      setHasMore(data.opportunities.pageInfo.hasNextPage);
    }
  }, [data, loadedMore]);

  const loadMore = (cursor?: string) => {
    setLoadedMore(true);
    if (hasMore) {
      setAfter(cursor);
      refetch({ requestPolicy: "network-only" });
    }
  };

  return {
    error,
    loadMore,
    fetching,
    items: Array.from(items),
  };
}
