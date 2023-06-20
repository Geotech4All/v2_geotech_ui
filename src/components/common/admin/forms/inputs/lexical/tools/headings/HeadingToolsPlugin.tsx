"use client";
import React from "react";
import { IconType } from "react-icons";
import { $setBlocksType } from "@lexical/selection";
import { $getSelection, $isRangeSelection } from "lexical";
import { $createHeadingNode, HeadingTagType } from "@lexical/rich-text";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4 } from "react-icons/lu";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import SemanticItem from "../textSemanticPlugin/SemanticItem";

export default function HeadingToolsPlugin() {
  const [editor] = useLexicalComposerContext();

  const headingHandlerFactory = (tag: HeadingTagType) => {
    return function () {
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(tag));
        }
      });
    };
  };

  return (
    <React.Fragment>
      {Headings.map((heading) => (
        <SemanticItem
          onClick={headingHandlerFactory(heading.tag)}
          className={heading.className}
          key={heading.name}
          icon={heading.icon}
        >
          {heading.name}
        </SemanticItem>
      ))}
    </React.Fragment>
  );
}

interface ElementType {
  name: string;
  icon: IconType;
  tag: HeadingTagType;
  className?: string;
}

const Headings: ElementType[] = [
  {
    className: "font-extrabold text-3xl",
    name: "Heading 1",
    icon: LuHeading1,
    tag: "h1",
  },
  {
    className: "font-bold text-[1.65rem]",
    name: "Heading 2",
    icon: LuHeading2,
    tag: "h2",
  },
  {
    className: "font-bold text-2xl",
    name: "Heading 3",
    icon: LuHeading3,
    tag: "h3",
  },
  {
    className: "font-bold text-[1.3rem]",
    name: "Heading 4",
    icon: LuHeading4,
    tag: "h4",
  },
];
