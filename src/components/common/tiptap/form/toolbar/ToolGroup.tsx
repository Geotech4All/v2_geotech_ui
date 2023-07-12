"use client";
import React from "react";
import Popover from "@mui/material/Popover";

interface GroupProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  anchorEl: HTMLElement | null;
}

export default function ToolGroup(props: GroupProps) {
  const { children, className, open, anchorEl, onClose } = props;
  const id = open ? "lexical-tool-group" : undefined;
  return (
    <Popover
      className={className}
      elevation={3}
      sx={{
        "& .MuiPaper-rounded": {
          borderRadius: "10px",
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={onClose}
      open={open}
      id={id}
      anchorEl={anchorEl}
    >
      {children}
    </Popover>
  );
}
