"use client";
import React from "react";
import { Editor } from "@tiptap/react";
import { IconType } from "react-icons";
import { FaAngleDown } from "react-icons/fa";
import { BsTextParagraph } from "react-icons/bs";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4 } from "react-icons/lu";
import Box from "@mui/material/Box";
import ToolGroup from "../ToolGroup";
import { TiptapToolProps } from "../toolbarTypes";
import ToolBarButton from "../ToolBarButton";
import HeadingTools from "./HeadingTools";

export default function TextModeTools(props: TiptapToolProps) {
  const { editor } = props;
  const [textModesOpen, setTextModesOpen] = React.useState(false);

  const toggleModesOpen = () => setTextModesOpen((curr) => !curr);
  const buttonRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const selectedType = getSelectionType(editor);
  return (
    <React.Fragment>
      <ToolBarButton
        className="whitespace-nowrap w-fit"
        tooltip="Text mode"
        tooltipPlacement="top"
        icon={selectedType.icon}
        onClick={toggleModesOpen}
        ref={buttonRef}
      >
        {selectedType.name}
        <FaAngleDown />
      </ToolBarButton>
      <ToolGroup
        anchorEl={buttonRef.current}
        open={textModesOpen}
        onClose={toggleModesOpen}
      >
        <Box className="p-2">
          <HeadingTools editor={editor} />
        </Box>
      </ToolGroup>
    </React.Fragment>
  );
}

interface ToolType {
  name: string;
  icon: IconType;
}

function getSelectionType(editor: Editor | null): ToolType {
  if (editor?.isActive("heading", { level: 1 })) {
    return {
      name: "Heading 1",
      icon: LuHeading1,
    };
  } else if (editor?.isActive("heading", { level: 2 })) {
    return {
      name: "Heading 2",
      icon: LuHeading2,
    };
  } else if (editor?.isActive("heading", { level: 3 })) {
    return {
      name: "Heading 3",
      icon: LuHeading3,
    };
  } else if (editor?.isActive("heading", { level: 4 })) {
    return {
      name: "Heading 4",
      icon: LuHeading4,
    };
  } else {
    return {
      name: "Normal",
      icon: BsTextParagraph,
    };
  }
}
