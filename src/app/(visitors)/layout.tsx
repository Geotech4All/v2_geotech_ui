import { VisitorNavigation } from "@/components/visitors";
import Footer from "@/components/visitors/Footer";
import React from "react";

interface PageProps {
  children?: React.ReactNode;
}

export const metadata = {
  title: {
    template: "%s | Geotech",
    default: "Geotech",
  },
  keywords: ["Geology", "Technology", "Opportunities"],
  authors: [{ name: "Ezekiel Victor", url: "https://vice.codes" }],
};

export default function VisitorsLayout(props: PageProps) {
  const { children } = props;
  return (
    <React.Fragment>
      <div id="__main" className="z-0">
        <VisitorNavigation />
        <div className="z-0 mt-[2.8rem] md:mt-[4.4rem]">{children}</div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
