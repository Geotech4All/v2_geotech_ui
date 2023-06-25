import { AuthLayout } from "@/components/layouts";
import React from "react"

interface LayoutProps {
  children?: React.ReactNode;
}

export default function AuthPageLayout(props: LayoutProps) {
  const { children } = props;
  return (
    <AuthLayout>
      { children }
    </AuthLayout>
  )
}
