import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

export default function VisitorNavigation() {

  return (
    <React.Fragment>
      <DesktopNavBar />
      <MobileNavBar />
    </React.Fragment>
  );
}
