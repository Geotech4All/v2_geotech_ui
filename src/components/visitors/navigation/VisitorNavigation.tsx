"use client";
import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default function VisitorNavigation() {
  const [navType, setNavType] = React.useState<"desktop" | "mobile">();

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setNavType("mobile");
    } else {
      setNavType("desktop");
    }
  }, []);

  return (
    <React.Fragment>
      {navType === "desktop" && <DesktopNavBar />}
      {navType === "mobile" && <MobileNavBar />}
    </React.Fragment>
  );
}
