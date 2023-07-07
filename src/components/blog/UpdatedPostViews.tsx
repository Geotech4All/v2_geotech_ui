"use client";
import { useIncreasePostViewCountMutation } from "@/graphql/generated";
import React from "react";

interface UpdatedPostViewsProps {
  postId: string;
}

export default function UpdatedPostViews(props: UpdatedPostViewsProps) {
  const { postId } = props;
  const [{}, updatePostView] = useIncreasePostViewCountMutation();
  React.useEffect(() => {
    updatePostView({ postId });
  }, [postId, updatePostView]);
  
  return (
    <React.Fragment>
    </React.Fragment>
  );
}
