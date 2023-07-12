import React from "react";
import { TiptapToolProps } from "../toolbarTypes";
import ToolBarButton from "../ToolBarButton";
import { FaAngleDown } from "react-icons/fa";
import ToolGroup from "../ToolGroup";
import { ImageTool, LinkTool } from ".";
import Box from "@mui/material/Box";

export default function InsertTools(props: TiptapToolProps) {
  const { editor } = props;
  const [insertOpen, setInsertOpen] = React.useState(false);

  const barRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const toggleOpen = () => setInsertOpen((curr) => !curr);
  return (
    <React.Fragment>
      <ToolBarButton
        ref={barRef}
        tooltip="Insert"
        onClick={toggleOpen}
        tooltipPlacement="bottom"
      >
        <span>+ Insert</span>
        <FaAngleDown />
      </ToolBarButton>
      <ToolGroup
        open={insertOpen}
        onClose={toggleOpen}
        anchorEl={barRef.current}
      >
        <Box className="p-2">
          <ImageTool editor={editor} />
          <LinkTool cleanUp={toggleOpen} editor={editor} />
        </Box>
      </ToolGroup>
    </React.Fragment>
  );
}
