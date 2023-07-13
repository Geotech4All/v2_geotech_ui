import { OpportuntiesQuickScroll } from "@/components";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function OpportunityLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="p-1 md:p-3 flex gap-3 bg-black/5">
      <OpportuntiesQuickScroll />
      {children}
    </div>
  );
}
