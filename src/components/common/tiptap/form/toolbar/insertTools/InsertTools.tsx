import React from "react";
import { TiptapToolProps } from "../toolbarTypes";
import ToolBarButton from "../ToolBarButton";
import { FaAngleDown } from "react-icons/fa";
import ToolGroup from "../ToolGroup";
import { ImageTool } from ".";

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
        className="p-2"
        open={insertOpen}
        onClose={toggleOpen}
        anchorEl={barRef.current}
      >
        <ImageTool editor={editor} />
      </ToolGroup>
    </React.Fragment>
  );
}
