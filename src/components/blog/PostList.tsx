"use client";
import React from "react";
import { useQuery } from "urql";
import { Maybe, PostTypeConnection } from "@/graphql/generated";
import { ALL_POSTS } from "@/graphql/requests/queries/Queries";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MidPostCard from "./MidPostCard";

interface PostListProps {
  initialPosts?: Maybe<PostTypeConnection> | undefined;
}

export default function PostList(props: PostListProps) {
  const { initialPosts } = props;
  const [posts, setPosts] = React.useState(initialPosts);
  const [] = useQuery({query: ALL_POSTS})

  return (
    <ul>
      <Grid container spacing={2} >
        {posts?.edges.map(post => (
          <Grid xs={12} sm={6} md={4} key={post?.cursor}>
            <MidPostCard post={post?.node} />
          </Grid>
        ))}
      </Grid>
    </ul>
  )
}
