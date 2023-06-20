import NavBar from "@/components/visitors/navigation/NavBar";
import React from "react";

interface PageProps {
  children?: React.ReactNode
}

export default function VisitorsLayout(props: PageProps) {
  const { children } = props;
  return (
    <React.Fragment>
      <div className="z-0">
        <NavBar />
        <div className="z-0 mt-[4.4rem]">{children}</div>
      </div>
    </React.Fragment>
  )
}
