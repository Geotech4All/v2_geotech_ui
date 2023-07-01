"use client";
import React from "react";
import { Tiptap } from "@/components/common/admin";
import { Editor } from "@tiptap/core";

export default function PostForm() {
  const [editor, setEditor] = React.useState<Editor>()
  const getEditor = (editor: Editor) => setEditor(editor);
  return (
    <form>
      <Tiptap getEditor={getEditor}/>
    </form>
  )
}
