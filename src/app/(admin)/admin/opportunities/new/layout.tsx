import React from "react";

export const metadata = {
  title: "New Opportunity | Geotech",
  description: "Create an new opportunity"
};

interface LayoutProps {
  children?: React.ReactNode;
}

export default function NewOpportunityLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
