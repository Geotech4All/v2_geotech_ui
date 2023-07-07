import { EnsureAuth } from "@/components/admin";
import { AdminNavLayout } from "@/components/layouts";
import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

export const metadata = {
  title: {
    template: "%s | Geotech",
    default: "Admin",
  },
};

export default function AdminLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <div>
      <AdminNavLayout>
        <EnsureAuth>
          {children}
        </EnsureAuth>
      </AdminNavLayout>
    </div>
  );
}
