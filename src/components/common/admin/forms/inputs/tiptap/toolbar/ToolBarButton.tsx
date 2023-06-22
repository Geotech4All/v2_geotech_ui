import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { IconType } from "react-icons/lib";

interface ToolBarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  tooltip?: string;
  tooltipPlacement?: "top" | "bottom" | "left" | "right";
  icon?: IconType;
}

const ToolBarButton = React.forwardRef<HTMLButtonElement, ToolBarButtonProps>(
  (props, ref) => {
    const {
      tooltip,
      tooltipPlacement,
      children,
      className,
      icon: Icon,
      ...rest
    } = props;
    return (
      <Tooltip placement={tooltipPlacement} title={tooltip} arrow>
        <button
          type="button"
          ref={ref}
          className={`
            hover:bg-black/10 p-1 px-2 flex items-center font-medium
            disabled:hover:bg-white rounded transition-all
            disabled:text-black/20 gap-2 ${className}`}
          {...rest}
        >
          {Icon && <Icon />}
          {children}
        </button>
      </Tooltip>
    );
  }
);

ToolBarButton.displayName = "ToolBarButton";

export default ToolBarButton;