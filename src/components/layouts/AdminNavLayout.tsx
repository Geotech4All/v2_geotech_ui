"use client";
import { useMediaQuery } from "@mui/material";
import React from "react"
import { AdminNavbarLayout, AdminSidebarLayout } from "../admin";

interface AdminNavLayoutProps {
  children?: React.ReactNode;
}

export default function AdminNavLayout(props: AdminNavLayoutProps) {
  const { children } = props;
  const isMediumScreen = useMediaQuery("(min-width: 768px)")

  return (
    <React.Fragment>
      {isMediumScreen ? (
        <AdminSidebarLayout>{children}</AdminSidebarLayout>
      ): (
        <AdminNavbarLayout>{children}</AdminNavbarLayout>
      )}
    </React.Fragment>
  )
}
