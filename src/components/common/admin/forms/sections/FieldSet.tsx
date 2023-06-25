import React from "react";

interface FieldSetProps
  extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children?: React.ReactNode;
}

export default function FieldSet(props: FieldSetProps) {
  const { children, className, ...rest } = props;
  return (
    <fieldset {...rest} className={`overflow-hidden rounded-md ${className}`}>
      {children}
    </fieldset>
  );
}
