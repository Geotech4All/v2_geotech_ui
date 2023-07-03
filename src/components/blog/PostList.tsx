"use client";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MidPostCard from "./MidPostCard";
import { usePaginatedPosts } from "./hooks";
import { Skeleton } from "@mui/material";
import { getDocHeight } from "@/utils/scroll";

export default function PostList() {
  const { items, loadMore, fetching } = usePaginatedPosts({ first: 6 });

  const handleScroll = () => {
    const scrollModifier = 300;
    const docHeight = getDocHeight();
    const currentScroll = window.scrollY + window.innerHeight;

    if (currentScroll + scrollModifier > docHeight) {
      loadMore(items.pop()?.cursor ?? undefined);
    }
  };

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
      {fetching && (
        <ul>
          <Grid container spacing={2}>
            {"6items".split("").map((item) => (
              <Grid xs={12} sm={6} md={4} key={item}>
                <div className="flex flex-col gap-2">
                  <Skeleton variant="rounded" width="100%" height={150} />
                  <Skeleton variant="rectangular" height={60} width="100%" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton
                        variant="text"
                        width={70}
                        sx={{ fontSize: "1rem" }}
                      />
                    </div>
                    <Skeleton
                      variant="text"
                      width={100}
                      sx={{ fontSize: "1rem" }}
                    />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </ul>
      )}
    </React.Fragment>
  );
}
