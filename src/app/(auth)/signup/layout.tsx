import React from "react";

interface SignUpLayoutProps {
  children?: React.ReactNode;
}

export const metadata = {
  title: "Sign Up - Geotech",
   description: "Join the geotech company"
};

export default function SignUpLayout(props: SignUpLayoutProps) {
  const { children } = props;
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}
