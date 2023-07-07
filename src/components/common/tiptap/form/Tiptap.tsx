"use client";
import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./toolbar/Toolbar";
import { Heading, FontFamily } from "./nodes";
import Text from "@tiptap/extension-text";
import Paragraph from "@tiptap/extension-paragraph";
import TextStyle from "@tiptap/extension-text-style";
import "./EditorStyles.scss";
import { Editor } from "@tiptap/core";
import { Transaction } from "@tiptap/pm/state";

interface TiptapProps {
  initialContent?: string;
  getEditor: (editor: Editor) => void;
  placeholder?: React.ReactNode;
}

export default function Tiptap(props: TiptapProps) {
  const { initialContent, getEditor, placeholder } = props;

  const handleChange = (props: {
    editor: Editor;
    transaction: Transaction;
  }) => {
    getEditor(props.editor);
  };

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: "min-h-[30rem] !focus-within:border-none !border-none !border-black/5 p-2",
      },
    },
    onUpdate: handleChange,
    extensions: [StarterKit, Heading, FontFamily, Text, Paragraph, TextStyle],
    content: initialContent,
  });
  const firstText =
    editor?.state.doc.content.firstChild?.content.firstChild?.text;

  return (
    <div className="p-1 rounded-lg">
      <ToolBar editor={editor} />
      <div className="relative mt-4 max-h-[90vh] overflow-auto">
        {!initialContent && !firstText && placeholder && (
          <div className="absolute top-2 left-2 italic text-black/20">
            {placeholder}
          </div>
        )}
        <EditorContent className={``} editor={editor} />
      </div>
    </div>
  );
}
