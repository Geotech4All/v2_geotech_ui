import React from "react";

interface PageProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Page(props: PageProps) {
  const { id, children, className } = props;
  return (
    <main id={id} className={`px-3 pb-8 min-h-screen ${className}`}>
      {children}
    </main>
  );
}
