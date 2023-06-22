import React from "react";
import { TiptapToolProps } from "../toolbarTypes";
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4 } from "react-icons/lu";
import ToolBarButton from "../ToolBarButton";
import { IconType } from "react-icons";
import { Level } from "@tiptap/extension-heading";

export default function HeadingTools(props: TiptapToolProps) {
  const { editor } = props;
  function headingHandlerFactory(level: Level) {
    return function () {
      editor?.commands.toggleHeading({ level });
    };
  }
  return (
    <React.Fragment>
      {headings.map((heading) => (
        <ToolBarButton
          onClick={headingHandlerFactory(heading.level)}
          className={`${heading.className} w-full`}
          icon={heading.icon}
          key={heading.name}
        >
          {heading.name}
        </ToolBarButton>
      ))}
    </React.Fragment>
  );
}

interface HeadingType {
  name: string;
  icon: IconType;
  className?: string;
  level: Level;
}

const headings: HeadingType[] = [
  {
    name: "Heading 1",
    icon: LuHeading1,
    className: "text-3xl font-extrabold",
    level: 1,
  },
  {
    name: "Heading 2",
    icon: LuHeading2,
    className: "text-2xl font-extrabold",
    level: 2,
  },
  {
    name: "Heading 3",
    icon: LuHeading3,
    className: "text-xl font-extrabold",
    level: 3,
  },
  {
    name: "Heading 4",
    icon: LuHeading4,
    className: "text-lg font-extrabold",
    level: 4,
  },
];
