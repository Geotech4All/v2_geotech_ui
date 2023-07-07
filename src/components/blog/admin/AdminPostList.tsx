"use client";
import { NothingFound } from "@/components/common";
import useAdminPaginatedPosts from "./useAdminPaginatedPosts";
import React from "react";
import AdminPostListItem from "./AdminPostListItem";

export default function AdminPostList() {
  const { items } = useAdminPaginatedPosts({ first: 20 });

  return (
    <React.Fragment>
      {items.length > 0
        ? (
          <ul className="flex flex-col gap-1">
            {items.map((item) => (
              <AdminPostListItem post={item?.node} key={item?.cursor} />
            ))}
          </ul>
        )
        : <NothingFound caption="No posts yet!" />}
    </React.Fragment>
  );
}
