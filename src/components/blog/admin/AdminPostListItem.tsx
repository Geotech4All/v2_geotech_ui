"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Popover from "@mui/material/Popover";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PostNodeDataType } from "../types";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { SlOptionsVertical } from "react-icons/sl";
import { useDeletePostMutation } from "@/graphql/generated";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

interface AdminPostLinkItemPorps {
  post: PostNodeDataType;
  onDelete?: () => void;
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
  const { post, onDelete } = props;
  const [showDelete, setShowDelete] = React.useState(false);
  const slugified = post?.title.split(" ").join("-");
  const slug = `${post?.postId}-${slugified}`;
  const [{}, deletePost] = useDeletePostMutation();

  const toggleDelete = () => setShowDelete((curr) => !curr);

  const handleDelete = () => {
    deletePost({ postId: post?.postId ?? "" });
    toggleDelete();
    onDelete && onDelete();
  };

  return (
    <React.Fragment>
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
          onClick={toggleDelete}
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
      <Modal open={showDelete} onClose={toggleDelete}>
        <div className="bg-white p-3 rounded flex flex-col gap-3">
          <div>
            <p>Are you sure you want to delete this post?</p>
            <h2>{post?.title}</h2>
          </div>
          <div>
            <Button
              onClick={toggleDelete}
              variant="outlined"
              color="warning"
              type="button"
            >
              No Cancel!
            </Button>
            <Button
              onClick={handleDelete}
              variant="contained"
              color="error"
              type="button"
            >
              Yes Delete!
            </Button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
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
