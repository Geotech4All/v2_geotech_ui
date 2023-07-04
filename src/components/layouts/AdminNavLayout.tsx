"use client";
import React from "react";
import { AdminNavbarLayout, AdminSidebarLayout } from "../admin";

interface AdminNavLayoutProps {
  children?: React.ReactNode;
}

export default function AdminNavLayout(props: AdminNavLayoutProps) {
  const { children } = props;
  const [navType, setNavType] = React.useState<"mobile" | "desktop">();

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
        <AdminSidebarLayout>{children}</AdminSidebarLayout>
      )}
      {navType === "mobile" && <AdminNavbarLayout>{children}
      </AdminNavbarLayout>}
    </React.Fragment>
  );
}
