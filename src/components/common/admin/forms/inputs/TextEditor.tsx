"use client";
import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import { theme } from "./lexical/lexicalThemes";
import LexicalToolBarPlugin from "./lexical/LexicalToolBarPlugin";
import { HeadingNode } from "@lexical/rich-text";
import { ListItemNode, ListNode } from "@lexical/list";

import "./lexical/EditorStyles.css";

function onError(error: Error): void {
  console.error(error);
}

interface OnChangePluginProps {
  onChange: (editorState: EditorState) => void;
}

function OnChangePlugin(props: OnChangePluginProps): null {
  const { onChange } = props;
  const [editor] = useLexicalComposerContext();
  React.useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [onChange, editor]);
  return null;
}

export default function TextEditor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, ListItemNode, ListNode],
  };

  return (
    <div className="relative border border-black/5 rounded-lg">
      <LexicalComposer initialConfig={initialConfig}>
        <LexicalToolBarPlugin />
        <ListPlugin />
        <CheckListPlugin />
        <div className="relative">
          <RichTextPlugin
            contentEditable={
              <ContentEditable className="p-2 border-none outline-none min-h-[400px] rounded" />
            }
            placeholder={
              <div className="absolute top-[9px] left-2.5 text-black/30 italic">
                Enter some text...
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <OnChangePlugin onChange={(_) => {}} />
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  );
}
