import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const metadata = {
  title: "Blog Admin",
};

export default function AdminBlogLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
