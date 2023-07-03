"use client";
import { URLType } from "@/constants/urls";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileLinkProps {
  onClick?: () => void;
  url: URLType;
}

export default function MobileLink(props: MobileLinkProps) {
  const { url, onClick } = props;
  const { href, icon: Icon, name } = url;
  const pathName = usePathname();

  const isCurrentPath =
    pathName.split("/")[1].toLowerCase() === name.toLowerCase();

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <Link
      onClick={handleClick}
      className="flex group items-center gap-2 text-lg font-medium"
      href={href}
    >
      <span
        className={`
          ${isCurrentPath ? "bg-black text-white shadow" : ""}
          p-2 aspect-square rounded-full group-hover:bg-black
          group-hover:text-white transition-all duration-300
        `}
      >
        <Icon />
      </span>
      <span
        className={`
          ${isCurrentPath ? "bg-black/10 shadow" : ""}
          p-1 px-4 w-full rounded-3xl group-hover:bg-black/10
          transition-all duration-300
        `}
      >
        {name}
      </span>
    </Link>
  );
}
