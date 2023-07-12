"use client";
import React from "react";
import Image from "next/image";
import { PostNodeDataType } from "../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import PostManageOptions from "./PostManageOptions";
import { RelativeTime } from "@/components/common";
import MobilePostManageOptions from "./MobilePostManageOptions";

interface AdminPostLinkItemPorps {
  post: PostNodeDataType;
  onDelete?: () => void;
}

export default function AdminPostListItem(props: AdminPostLinkItemPorps) {
  const { post } = props;
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  return (
    <div className="shadow bg-white p-1 rounded-md flex items-center gap-3">
      <Image
        width={50}
        height={50}
        className="aspect-square rounded-full"
        src={post?.coverPhoto?.url ?? "/image_placeholder.svg"}
        alt={post?.coverPhoto?.description ?? "image placeholder"}
      />
      <div className="flex justify-between pl-3 rounded-xl items-center w-full p-2 gap-2">
        <h4 className="font-medium line-clamp-1">{post?.title}</h4>
        <div className="flex items-center gap-4">
          <RelativeTime
            className="whitespace-nowrap text-black/70"
            dateTime={post?.lastUpdated}
          />
          {isMediumScreen
            ? <PostManageOptions post={post} />
            : <MobilePostManageOptions post={post} />}
        </div>
      </div>
    </div>
  );
}
