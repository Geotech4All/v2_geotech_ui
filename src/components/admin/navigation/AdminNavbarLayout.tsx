import React from "react";
import AdminNavBar from "./NavBar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function AdminNavbarLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className="flex flex-col">
      <AdminNavBar />
      <div className="mt-11">{ children }</div>
    </div>
  );
}
