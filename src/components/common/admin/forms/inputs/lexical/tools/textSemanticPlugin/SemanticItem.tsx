"use client";
import { Tooltip } from "@mui/material";
import React from "react";
import { IconType } from "react-icons";

interface SemanticItemProps {
  icon: IconType;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  toolTip?: string;
  toolTipPlacement?: "top" | "bottom" | "left" | "right";
}

const SemanticItem = React.forwardRef<HTMLButtonElement, SemanticItemProps>(
  (props, ref) => {
    const { icon: Icon, children, onClick, className, toolTip, toolTipPlacement } = props;

    const handleKeyDown: React.KeyboardEventHandler = () =>
      onClick && onClick();
    return (
      <Tooltip title={toolTip} arrow placement={toolTipPlacement}>
        <button
          ref={ref}
          className={`hover:bg-black/5 font-medium w-full rounded-md transition flex items-center gap-2 p-1 ${className}`}
          onClick={onClick}
          onKeyDown={handleKeyDown}
        >
          <Icon />
          {children}
        </button>
      </Tooltip>
    );
  }
);

SemanticItem.displayName = "SemanticItem";

export default SemanticItem;
