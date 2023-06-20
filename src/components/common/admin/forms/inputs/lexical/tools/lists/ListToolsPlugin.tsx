"use client";
import React from "react";
import { IconType } from "react-icons";
import { BsListUl, BsListOl, BsListCheck } from "react-icons/bs";
import SemanticItem from "../textSemanticPlugin/SemanticItem";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  INSERT_CHECK_LIST_COMMAND,
} from "@lexical/list";

type ListTagType = "ul" | "ol" | "cl";

export default function ListToolsPlugin() {
  const [editor] = useLexicalComposerContext();

  const listHandlerFactory = (tag: ListTagType) => {
    return function () {
      editor.update(() => {
        if (tag === "ol") {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
          return;
        } else if (tag === "ul") {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        } else {
          console.log("Check List")
          editor.dispatchCommand(INSERT_CHECK_LIST_COMMAND, undefined);
        }
      });
    };
  };

  return (
    <React.Fragment>
      {Lists.map((list) => (
        <SemanticItem
          onClick={listHandlerFactory(list.tag)}
          icon={list.icon}
          key={list.name}
        >
          {list.name}
        </SemanticItem>
      ))}
    </React.Fragment>
  );
}

interface ListType {
  name: string;
  tag: ListTagType;
  icon: IconType;
  className?: string;
}

const Lists: ListType[] = [
  {
    name: "Bullet List",
    tag: "ul",
    icon: BsListUl,
  },
  {
    name: "Numbered List",
    tag: "ol",
    icon: BsListOl,
  },
  {
    name: "Check List",
    tag: "cl",
    icon: BsListCheck,
  },
];
