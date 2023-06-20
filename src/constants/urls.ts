import { IconType } from "react-icons";
import { HiHome } from "react-icons/hi";
import { BsPostcard } from "react-icons/bs";
import { SiGooglepodcasts } from "react-icons/si";
import { HiBriefcase } from "react-icons/hi";

export interface URLType {
  name: string;
  href: string;
  icon: IconType
}

export const visitoUrls: URLType[] = [
  {
    name: "Home",
    href: "/",
    icon: HiHome
  },
  {
    name: "Blog",
    href: "/blog",
    icon: BsPostcard
  },
  {
    name: "Podcast",
    href: "/podcast",
    icon: SiGooglepodcasts
  },
  {
    name: "Opportunities",
    href: "/opportunities",
    icon: HiBriefcase
  }
]
