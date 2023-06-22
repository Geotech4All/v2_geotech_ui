"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./toolbar/Toolbar";
import { Heading, FontFamily } from "./nodes";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import TextStyle from "@tiptap/extension-text-style";
import "./EditorStyles.scss";

interface TiptapProps {
  initialContent?: string;
}

export default function Tiptap(props: TiptapProps) {
  const { initialContent } = props;
  const editor = useEditor({
    editorProps: {
        attributes: {
          class: "min-h-[30rem] p-2"
        }
      },
    extensions: [
      StarterKit,
      Heading,
      FontFamily,
      Text,
      Paragraph,
      TextStyle
    ],
    content: initialContent
  })
  const firstText = editor?.state.doc.content.firstChild?.content.firstChild?.text
  return (
    <div className="shadow-lg rounded-lg">
      <ToolBar editor={editor}/>
      <div className="relative max-h-[90vh] overflow-auto">
        {!initialContent && !firstText && <div className="absolute top-2 left-2 italic text-black/20">Enter text</div>}
        <EditorContent className={``} editor={editor}/>
      </div>
    </div>
  )
}
