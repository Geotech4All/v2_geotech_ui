"use client";
import Box from "@mui/material/Box";
import React from "react";
import { RxText } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa";
import ToolGroup from "./ToolGroup";
import ToolBarButton from "./ToolBarButton";
import { TiptapToolProps } from "./toolbarTypes";
import { Editor } from "@tiptap/react";

export default function FontTools(props: TiptapToolProps) {
  const { editor } = props;
  const [fontOpen, setFontOpen] = React.useState(false);

  const toggleFontOpen = () => setFontOpen((curr) => !curr);

  const textRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  const activeFont = getSelectionForm(editor);

  function fontHandlerFactory(fontFamily: string) {
    return function () {
      editor?.commands.setFontFamily(fontFamily);
      toggleFontOpen();
    };
  }

  return (
    <React.Fragment>
      <ToolBarButton onClick={toggleFontOpen} tooltipPlacement="bottom" tooltip="Font" ref={textRef}>
        <RxText />
        {activeFont}
        <FaAngleDown />
      </ToolBarButton>

      <ToolGroup
        anchorEl={textRef.current}
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

function getSelectionForm(editor:Editor | null) {
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
