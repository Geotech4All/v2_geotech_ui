"use client";
import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BsLink45Deg } from "react-icons/bs";
import ToolBarButton from "../ToolBarButton";
import { TiptapToolProps } from "../toolbarTypes";

interface LinkToolProps extends TiptapToolProps {
  cleanUp?: () => void;
}

export default function LinkTool(props: LinkToolProps) {
  const { editor, cleanUp } = props;
  const [showLinkInput, setShowLinkInput] = React.useState(false);

  const previousURL = editor?.getAttributes("link").href;
  const linkRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const toggleLinkInput = () => setShowLinkInput((curr) => !curr);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      handleSetLink();
    }
  };

  const handleSetLink = React.useCallback(() => {
    const link = linkRef.current.value;
    if (link === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor?.chain().focus().extendMarkRange("link").setLink({ href: link })
      .run();
    toggleLinkInput();
    cleanUp && cleanUp();
  }, [editor, cleanUp]);

  return (
    <React.Fragment>
      <ToolBarButton
        onClick={toggleLinkInput}
        tooltip="Insert Link"
        tooltipPlacement="left"
        className="w-full"
      >
        <BsLink45Deg />
        <span>Link</span>
      </ToolBarButton>
      <Modal
        className="flex items-center justify-center p-2"
        open={showLinkInput}
        onClose={toggleLinkInput}
      >
        <div className="w-full gap-2 outline-none max-w-md flex flex-col bg-white p-2 rounded-md">
          <h3 className="font-semibold text-lg text-black/50">
            Enter Link URL
          </h3>
          <TextField
            fullWidth
            autoFocus
            size="small"
            title="Link"
            inputRef={linkRef}
            onKeyDown={handleKeyDown}
            placeholder="www.google.com"
            defaultValue={previousURL}
          />
          <Button color="success" onClick={handleSetLink} type="button">
            Insert
          </Button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
