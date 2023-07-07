"use client";

import { useMediaQuery } from "@mui/material";
import { usePaginatedOpportunites } from "../hooks";
import OpportunityList from "./OpportunityList";
import React from "react";

export default function OpportuntiesQuickScroll() {
  const pageSize = 20;
  const { items, fetching, loadMore } = usePaginatedOpportunites({
    first: pageSize,
  });
  const isMidScreen = useMediaQuery("(min-width: 768px)");

  const handleScroll: React.UIEventHandler = (e) => {
    const clientHeight = e.currentTarget.clientHeight;
    const scrollTop = e.currentTarget.scrollTop;
    const scrollHeight = e.currentTarget.scrollHeight;
    if (scrollHeight - scrollTop === clientHeight) {
      loadMore(items.pop()?.cursor);
    }
  };

  return (
    <React.Fragment>
      {isMidScreen && (
        <ul
          onScroll={handleScroll}
          className="max-h-screen overflow-y-auto min-w-[23rem]"
        >
          <OpportunityList fetching={fetching} opportunities={items} />
        </ul>
      )}
    </React.Fragment>
  );
}
