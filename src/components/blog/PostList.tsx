"use client";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MidPostCard from "./MidPostCard";
import { usePaginatedPosts } from "./hooks";
import { Skeleton } from "@mui/material";

export default function PostList() {
  const { items, loadMore, fetching, error } = usePaginatedPosts({ first: 20 });

  return (
    <React.Fragment>
      {true ? (
        <ul>
          <Grid container spacing={2}>
            {"items".split("").map((item) => (
              <Grid xs={12} sm={6} md={4} key={item}>
                <Skeleton variant="rounded" width={350} height={150}/>
              </Grid>
            ))}
          </Grid>
        </ul>
      ) : (
        <ul>
          <Grid container spacing={2}>
            {items.map((post) => (
              <Grid xs={12} sm={6} md={4} key={post?.cursor}>
                <MidPostCard post={post?.node} />
              </Grid>
            ))}
          </Grid>
        </ul>
      )}
    </React.Fragment>
  );
}
