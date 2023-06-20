"use client";
import Box from "@mui/material/Box";
import React from "react";
import { LuHeading1 } from "react-icons/lu";
import ToolGroup from "../ToolGroup";
import SemanticItem from "./SemanticItem";
import HeadingToolsPlugin from "../headings/HeadingToolsPlugin";
import ListToolsPlugin from "../lists/ListToolsPlugin";

export default function TextSemanticPlugin() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const open = Boolean(anchorEl);

  const anchorRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const handleGroupOpen = () => {
    setAnchorEl(anchorRef.current);
  };

  const handleGroupClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="flex items-center p-1">
      <SemanticItem
        toolTip="Text Mode"
        toolTipPlacement="top"
        onClick={handleGroupOpen}
        ref={anchorRef}
        icon={LuHeading1}
      >
        Heading 1
      </SemanticItem>
      <ToolGroup onClose={handleGroupClose} open={open} anchorEl={anchorEl}>
        <Box className="p-2 min-w-[9rem]">
          <HeadingToolsPlugin />
          <ListToolsPlugin />
        </Box>
      </ToolGroup>
    </Box>
  );
}
