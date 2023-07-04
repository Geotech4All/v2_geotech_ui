import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  href: string;
  children?: React.ReactNode;
}

export default function LinkButton(props: LinkButtonProps) {
  const { href, children } = props;
  return (
    <Link
      href={href}
      className={`
        bg-black text-white font-medium fixed right-3 bottom-3
        p-2 px-3 rounded
      `}
    >
      {children}
    </Link>
  );
}
