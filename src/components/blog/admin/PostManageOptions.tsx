"use client";
import React from "react";
import Link from "next/link";
import { CombinedError } from "urql";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDeletePostMutation } from "@/graphql/generated";
import { Alert } from "@mui/material";
import { PostNodeDataType } from "../types";

interface PostManageOptionsProps {
  post: PostNodeDataType;
  onDelete?: () => void;
}

export default function PostManageOptions(props: PostManageOptionsProps) {
  const { post, onDelete } = props;
  const [showDelete, setShowDelete] = React.useState(false);
  const [deleteErrors, setDeleteErrors] = React.useState<
    CombinedError | undefined
  >(undefined);
  const slugified = post?.title.split(" ").join("-");
  const slug = `${post?.postId}-${slugified}`;
  const [{}, deletePost] = useDeletePostMutation();

  const toggleDelete = () => setShowDelete((curr) => !curr);

  const handleDelete = async () => {
    const res = await deletePost({ postId: post?.postId ?? "" });
    if (res.data?.deletePost?.success) {
      onDelete && onDelete();
    } else {
      setDeleteErrors(res.error);
    }
    toggleDelete();
  };

  const handleErrorClose = () => {
    setDeleteErrors(undefined);
  };

  const showErrorSnack = Boolean(deleteErrors);

  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row p-2 rounded-md md:items-center gap-2">
        <Link
          href={`/admin/blog/edit/${slug}`}
          className={`
            flex items-center text-yellow-400 hover:bg-yellow-500/10 px-2 gap-1 p-1
            rounded transition-all
        `}
        >
          <AiFillEdit size={25} />
          <span>Edit</span>
        </Link>
        <Button
          color="error"
          onClick={toggleDelete}
          type="button"
          className="flex items-center gap-1"
        >
          <AiFillDelete size={25} />
          <span>Delete</span>
        </Button>
      </div>
      <Modal
        className="flex items-center justify-center"
        open={showDelete}
        onClose={toggleDelete}
      >
        <div className="bg-white p-3 rounded items-center flex flex-col gap-3">
          <div className="flex flex-col items-center">
            <p>Are you sure you want to delete this post?</p>
            <h2 className="font-medium text-lg">{post?.title}</h2>
          </div>
          <div className="flex items-center gap-2">
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
      <Snackbar open={showErrorSnack} onClose={handleErrorClose}>
        <Alert
          onClose={handleErrorClose}
          severity="error"
          sx={{ widht: "100%" }}
        >
          {deleteErrors?.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
