"use client";
import React from "react";
import { useMediaQuery } from "@mui/material";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function VisitorNavLayout(props: LayoutProps) {
  const { children } = props;
  const [navType, setNavType] = React.useState<"desktop"|"mobile">();

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setNavType("mobile");
    } else {
      setNavType("desktop");
    }
  }, []);
  
  return (
    <React.Fragment>
      {navType === "desktop" && (
        <div>
          <DesktopNavBar />
          <div className="z-0 mt-[4.4rem]">{children}</div>
        </div>
      )}
      {navType === "mobile" && (
        <div>
          <MobileNavBar />
          <div className="z-0 mt-[2.8rem]">{children}</div>
        </div>
      )}
    </React.Fragment>
  );
}
