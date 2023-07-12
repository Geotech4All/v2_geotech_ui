"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Popover from "@mui/material/Popover";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PostNodeDataType } from "../types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";

interface AdminPostLinkItemPorps {
  post: PostNodeDataType;
}

export default function AdminPostListItem(props: AdminPostLinkItemPorps) {
  const { post } = props;
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex items-center gap-3">
      <Image
        width={50}
        height={50}
        className="border aspect-square rounded-full"
        src={post?.coverPhoto?.url ?? "/image_placeholder.svg"}
        alt={post?.coverPhoto?.description ?? "image placeholder"}
      />
      <div className="flex justify-between pl-3 rounded-xl items-center border w-full p-2 gap-2">
        <h4 className="font-medium line-clamp-1">{post?.title}</h4>
        {isMediumScreen
          ? <PostOptions post={post} />
          : <MobilePostOptions post={post} />}
      </div>
    </div>
  );
}

function PostOptions(props: AdminPostLinkItemPorps) {
  const { post } = props;
  const slugified = post?.title.split(" ").join("-");
  const slug = `${post?.postId}-${slugified}`;
  return (
    <div className="flex flex-col md:flex-row p-2 rounded-md items-center gap-2">
      <Link
        href={`/admin/blog/edit/${slug}`}
        className={`
          flex items-center bg-yellow-200/40 text-yellow-600 p-0.5 px-2 gap-2
          rounded border border-yellow-600 flex-1
          `}
      >
        <span className="aspect-square">
          <AiFillEdit />
        </span>
        <span>Edit</span>
      </Link>
      <button
        type="button"
        className={`
          flex items-center bg-red-200/40 text-red-500 p-0.5 px-2 gap-2
          rounded border border-red-500 flex-1
          `}
      >
        <span className="aspect-square">
          <AiFillDelete />
        </span>
        <span>Delete</span>
      </button>
    </div>
  );
}

function MobilePostOptions(props: AdminPostLinkItemPorps) {
  const { post } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "post-manage-popover" : undefined;
  return (
    <React.Fragment>
      <button
        onClick={handleClick}
        className="hover:bg-black/20 transition-all"
      >
        <SlOptionsVertical />
      </button>
      <Popover
        open={open}
        id={id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <PostOptions post={post} />
      </Popover>
    </React.Fragment>
  );
}
