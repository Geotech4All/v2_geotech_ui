"use client";
import React from "react";
import Box from "@mui/material/Box";
import { Editor } from "@tiptap/react";
import { RxText } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";
import { ToolBarButton, ToolGroup } from ".";
import type { TiptapToolProps } from ".";

export default function FontTools(props: TiptapToolProps) {
  const { editor } = props;
  const [fontOpen, setFontOpen] = React.useState(false);

  const toggleFontOpen = () => setFontOpen((curr) => !curr);

  const barRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const activeFont = getSelectionForm(editor);

  function fontHandlerFactory(fontFamily: string) {
    return function () {
      editor?.commands.setFontFamily(fontFamily);
      toggleFontOpen();
    };
  }

  return (
    <React.Fragment>
      <ToolBarButton
        onClick={toggleFontOpen}
        tooltipPlacement="bottom"
        tooltip="Font"
        ref={barRef}
      >
        <RxText />
        {activeFont}
        <FaAngleDown />
      </ToolBarButton>

      <ToolGroup
        anchorEl={barRef.current}
        onClose={toggleFontOpen}
        open={fontOpen}
      >
        <Box className="p-2">
          {fontFamilies.map((family) => (
            <ToolBarButton
              onClick={fontHandlerFactory(family.fontFamily)}
              className={`${family.className} w-full`}
              key={family.name}
            >
              {family.name}
            </ToolBarButton>
          ))}
        </Box>
      </ToolGroup>
    </React.Fragment>
  );
}

function getSelectionForm(editor: Editor | null) {
  for (const font of fontFamilies) {
    if (editor?.isActive("textStyle", { fontFamily: font.fontFamily })) {
      return font.name;
    }
    return "Inter";
  }
}

interface FontFamilyType {
  fontFamily: string;
  className?: string;
  name: string;
}

const fontFamilies: FontFamilyType[] = [
  {
    fontFamily: "'Inter', sans-serif",
    className: "font-inter",
    name: "Inter",
  },
  {
    fontFamily: "'Nunito', sans-serif",
    className: "font-nunito",
    name: "Nunito",
  },
  {
    fontFamily: "'Montserrat', sans-seri",
    className: "font-montserrat",
    name: "Montserrat",
  },
  {
    fontFamily: "'Lobster', cursive",
    className: "font-lobster",
    name: "Lobster",
  },
  {
    fontFamily: "'Pacifico', cursive",
    name: "Pacifico",
  },
];
