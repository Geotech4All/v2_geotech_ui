"use client";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { MidPostCard, PostPlaceholders } from "./cards";
import { usePaginatedPosts } from "./hooks";
import { hasScrolledDown } from "@/utils/scroll";

export default function PostList() {
  const { items, loadMore, fetching } = usePaginatedPosts({ first: 20 });

  const handleScroll = React.useCallback(() => {
    const scrollModifier = 200;

    if (hasScrolledDown(scrollModifier)) {
      const cursor = items.pop()?.cursor;
      loadMore(cursor ?? undefined);
    }
  }, [items, loadMore]);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <React.Fragment>
      <ul>
        <Grid container spacing={2}>
          {items.map((post) => (
            <Grid xs={12} sm={6} md={4} key={post?.cursor}>
              <MidPostCard post={post?.node} />
            </Grid>
          ))}
        </Grid>
      </ul>
      {fetching && <PostPlaceholders />}
    </React.Fragment>
  );
}
