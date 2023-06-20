"use client";
import { CiUndo, CiRedo } from "react-icons/ci";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, UNDO_COMMAND } from "lexical";

export default function UndoRedoPlugin() {
  const [editor] = useLexicalComposerContext();
  const handleUndo = () => {
    editor.update(() => {
      const root = $getRoot()
    })
  }
  return (
    <Box className="flex p-2 items-center gap-3">
      <Tooltip placement="bottom" title="Undo" arrow>
        <button type="button"><CiUndo size={20} /></button>
      </Tooltip>
      <Tooltip placement="bottom" title="Redo" arrow>
        <button type="button"><CiRedo size={20}/></button>
      </Tooltip>
    </Box>
  )
}
