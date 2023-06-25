import { AuthLayout } from "@/components/layouts";
import React from "react";

interface AdminAuthLayoutProps {
  children?: React.ReactNode;
}

export default function AdminAuthLayout(props: AdminAuthLayoutProps) {
  const { children } = props;
  return (
    <AuthLayout>
      { children }
    </AuthLayout>
  )
}
