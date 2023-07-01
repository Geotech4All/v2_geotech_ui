"use client";
import React from "react"
import { useMediaQuery } from "@mui/material";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function VisitorNavLayout(props: LayoutProps) {
  const { children } = props;
  const isDesktopScreen = useMediaQuery("(min-width: 768px)");
  return (
    <React.Fragment>
      {isDesktopScreen ? (
        <div>
          <DesktopNavBar />
          <div className="z-0 mt-[4.4rem]">{children}</div>
        </div>
      ): (
      <div>
        <MobileNavBar />
        <div className="z-0 mt-[4.4rem]">{children}</div>
      </div>
      )}
    </React.Fragment>
  )
}
