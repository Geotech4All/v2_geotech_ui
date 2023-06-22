"use client";
import Box from "@mui/material/Box";
import { CgUndo, CgRedo } from "react-icons/cg";
import { TiptapToolProps } from "./toolbarTypes";
import ToolBarButton from "./ToolBarButton";

export default function UndoRedoTool(props: TiptapToolProps) {
  const { editor } = props;

  const handleUndo = () => {
    if (editor?.can().undo()) {
      editor.commands.undo();
    }
  };

  const handleRedo = () => {
    if (editor?.can().redo()) {
      editor.commands.redo();
    }
  };

  return (
    <Box className="flex items-center p-1 px-1">
      <ToolBarButton tooltipPlacement="bottom" tooltip="undo" onClick={handleUndo} disabled={!editor?.can().undo()}>
        <CgUndo size={25} />
      </ToolBarButton>
      <ToolBarButton tooltipPlacement="bottom" tooltip="redo" onClick={handleRedo} disabled={!editor?.can().redo()}>
        <CgRedo size={25} />
      </ToolBarButton>
    </Box>
  );
}
