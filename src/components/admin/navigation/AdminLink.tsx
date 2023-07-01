"use client";
import { URLType } from "@/constants/urls";
import { useAppSelector } from "@/redux/hooks";
import { selectAdmin } from "@/redux/slices/adminSlice";
import { useMediaQuery } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function AdminLink(props: URLType) {
  const { href, icon: Icon, name } = props;
  const pathName = usePathname().split("/")[2];
  const isCurrentPath = pathName.toLowerCase() === name.toLowerCase();

  const admin = useAppSelector(selectAdmin);
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Link
      className="flex text-xl items-center gap-1 font-medium group w-full"
      href={href}
    >
      <span
        className={`
        ${isCurrentPath ? "bg-black text-white" : ""}
        aspect-square rounded-full text-2xl p-2.5 group-hover:bg-black
        group-hover:text-white transition-all duration-300 group-hover:shadow-lg
      `}
      >
        <Icon />
      </span>
      {isMediumScreen
        ? (
          <React.Fragment>
            {admin.navOpen && (
              <NavLinkText isCurrentPath={isCurrentPath}>
                {name}
              </NavLinkText>
            )}
          </React.Fragment>
        )
        : (
          <NavLinkText isCurrentPath={isCurrentPath}>
            {name}
          </NavLinkText>
        )}
    </Link>
  );
}

interface LinkTextProps {
  children?: React.ReactNode;
  className?: string;
  isCurrentPath?: boolean;
}

function NavLinkText(props: LinkTextProps) {
  const { children, className, isCurrentPath } = props;
  return (
    <span
      className={`
        ${isCurrentPath ? "bg-black/60 text-white" : ""}
        group-hover:bg-black/20 p-2 rounded-3xl px-4 transition-all duration-300
        w-full group-hover:shadow-lg ${className}
      `}
    >
      {children}
    </span>
  );
}
