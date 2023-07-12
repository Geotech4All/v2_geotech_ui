"use client";
import { NothingFound } from "@/components/common";
import useAdminPaginatedPosts from "./useAdminPaginatedPosts";
import React from "react";
import AdminPostListItem from "./AdminPostListItem";

export default function AdminPostList() {
  const { items, refetch } = useAdminPaginatedPosts({ first: 20 });

  const handlePostDelete = () => {
    refetch();
  };

  return (
    <React.Fragment>
      {items.length > 0
        ? (
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <AdminPostListItem
                onDelete={handlePostDelete}
                post={item?.node}
                key={item?.cursor}
              />
            ))}
          </ul>
        )
        : <NothingFound caption="No posts yet!" />}
    </React.Fragment>
  );
}
