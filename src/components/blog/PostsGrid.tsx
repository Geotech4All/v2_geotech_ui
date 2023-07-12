import React from "react";
import { Maybe } from "graphql/jsutils/Maybe";
import { LargePostCard, MidPostCard } from "./cards";
import { PostTypeConnection } from "@/graphql/generated";

interface PostsGridProps {
  posts: Maybe<PostTypeConnection> | undefined;
}
export default function PostsGrid(props: PostsGridProps) {
  const { posts } = props;

  return (
    <React.Fragment>
      <LargePostCard post={posts?.edges[0]?.node} />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts?.edges.slice(1, 7).map((post) => (
          <MidPostCard key={post?.cursor} post={post?.node} />
        ))}
      </ul>
    </React.Fragment>
  );
}
