import React from "react";
import { twMerge } from "tailwind-merge";

interface PageProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Page(props: PageProps) {
  const { id, children, className } = props;
  return (
    <main
      id={id}
      className={twMerge(
        "px-3 pb-8 w-full min-h-screen",
        className,
      )}
    >
      {children}
    </main>
  );
}
