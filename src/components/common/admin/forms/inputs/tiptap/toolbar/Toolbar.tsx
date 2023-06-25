import List from "@mui/material/List";
import { Editor } from "@tiptap/react";
import UndoRedoTool from "./UndoRedoTool";
import TextModeTools from "./textModeTolls/TextModeTools";
import FontTools from "./FontTools";

interface ToolBarProps {
  editor: Editor | null;
}

export default function ToolBar(props: ToolBarProps) {
  const { editor } = props;
  return (
    <List className="flex max-w-95vw rounded-xl shadow shadow-black/5 overflow-auto items-center">
      <UndoRedoTool editor={editor}/>
      <Divider />
      <TextModeTools editor={editor}/>
      <Divider />
      <FontTools editor={editor}/>
    </List>
  )
}

function Divider() {
  return <div className="w-[1px] mx-2 min-h-[30px] bg-black/10"/>
}
