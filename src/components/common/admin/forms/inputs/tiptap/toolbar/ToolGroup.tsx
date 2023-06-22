"use client";
import React from "react";
import Popover from "@mui/material/Popover";

interface GroupProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
  anchorEl: HTMLElement | null;
}

export default function ToolGroup(props: GroupProps) {
  const { children, open, anchorEl, onClose } = props;
  const id = open ? "lexical-tool-group" : undefined;
  return (
      <Popover elevation={3} sx={{
          "& .MuiPaper-rounded": {
            borderRadius: "10px"
          }
        }}
        anchorOrigin=
        {{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin=
        {{
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
  )
}
