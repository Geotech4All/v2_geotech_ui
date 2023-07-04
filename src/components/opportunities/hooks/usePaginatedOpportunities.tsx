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
  const [after, setAfter] = React.useState<string | undefined>(
    initialAfter ?? undefined,
  );
  const [hasMore, setHasMore] = React.useState(false);
  const [{ data, fetching, error }] = useOpportunitiesQuery({
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
      setItems((curr) =>
        new Set(Array.from(curr).concat(data?.opportunities?.edges))
      );
      setHasMore(data.opportunities.pageInfo.hasNextPage);
    }
  }, [data]);

  const loadMore = (cursor?: string) => {
    if (hasMore) {
      setAfter(cursor);
    }
  };

  return {
    error,
    loadMore,
    fetching,
    items: Array.from(items),
  };
}
