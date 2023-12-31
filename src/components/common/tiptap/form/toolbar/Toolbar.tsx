import List from "@mui/material/List";
import { Editor } from "@tiptap/react";
import { FontTools, TextModeTools, UndoRedoTool } from ".";
import { InsertTools } from "./insertTools";

interface ToolBarProps {
  editor: Editor | null;
}

export default function ToolBar(props: ToolBarProps) {
  const { editor } = props;
  return (
    <List
      className={`
        flex max-w-95vw rounded-2xl shadow-lg shadow-black/5
        overflow-auto items-center hover:shadow-black/10 transition-all
      `}
    >
      <UndoRedoTool editor={editor} />
      <Divider />
      <TextModeTools editor={editor} />
      <Divider />
      <FontTools editor={editor} />
      <Divider />
      <InsertTools editor={editor} />
    </List>
  );
}

function Divider() {
  return <div className="w-[1px] mx-2 min-h-[30px] bg-black/10" />;
}
