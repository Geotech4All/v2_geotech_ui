"use client";
import React from "react";
import Popover from "@mui/material/Popover";
import { PostNodeDataType } from "../types";
import { SlOptionsVertical } from "react-icons/sl";
import PostManageOptions from "./PostManageOptions";

interface MobilePostManageOptionsProps {
  post: PostNodeDataType;
}

export default function MobilePostManageOptions(
  props: MobilePostManageOptionsProps,
) {
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
        className={`
          outline-none hover:bg-black/20 transition-all p-1
          aspect-square rounded-full
        `}
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
        <PostManageOptions post={post} />
      </Popover>
    </React.Fragment>
  );
}
