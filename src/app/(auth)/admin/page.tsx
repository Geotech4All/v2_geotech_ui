"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Admin() {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/admin/dashboard");
  }, [router]);

  return <React.Fragment />;
}
