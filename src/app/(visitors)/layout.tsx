import { VisitorNavLayout } from "@/components/visitors";
import Footer from "@/components/visitors/Footer";
import React from "react";

interface PageProps {
  children?: React.ReactNode;
}

export default function VisitorsLayout(props: PageProps) {
  const { children } = props;
  return (
    <React.Fragment>
      <div className="z-0">
        <VisitorNavLayout>
          {children}
        </VisitorNavLayout>
      </div>
      <Footer />
    </React.Fragment>
  );
}
