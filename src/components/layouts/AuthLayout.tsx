"use client";

import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout(props: AuthLayoutProps) {
  const { children } = props;
  const isLarge = useMediaQuery("(min-width: 800px");
  return (
    <div className="flex max-h-screen min-h-screen overflow-hidden justify-center">
      {isLarge && (
        <div className="max-w-screen-[100vh] overflow-hidden p-1">
          <Image
            className="h-full object-cover flex items-center rounded max-h-screen justify-center"
            width={500}
            height={768}
            src="/tech.jpg"
            alt="a desk setup with a speaker, a macbook and an iMac"
          />
        </div>
      )}
      {children}
    </div>
  );
}
