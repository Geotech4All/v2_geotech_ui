import React from "react";

interface FieldSetProps {
  children?: React.ReactNode;
}

export default function FieldSet(props: FieldSetProps) {
  const { children } = props;
  return (
    <fieldset className="border border-black/5 overflow-hidden rounded-md">{children}</fieldset>
  );
}
