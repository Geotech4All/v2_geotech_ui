"use client";
import React from "react";
import { Tiptap } from "@/components/common/admin";
import { Editor } from "@tiptap/core";
import { useCreateUpdatePostMutation } from "@/graphql/generated";

export default function PostForm() {
  const [editor, setEditor] = React.useState<Editor>();
  const getEditor = (editor: Editor) => setEditor(editor);

  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [{}, savePost] = useCreateUpdatePostMutation();

  const handleSavePost: React.FormEventHandler = (e) => {
    e.preventDefault();
    savePost({
      title: titleRef.current.value,
      body: editor?.getHTML() ?? "",
    });
  };

  return (
    <form onSubmit={handleSavePost}>
      <input placeholder="Title" ref={titleRef} />
      <Tiptap getEditor={getEditor} />
    </form>
  );
}
