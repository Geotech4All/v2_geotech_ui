import { IconType } from "react-icons";
import { HiHome } from "react-icons/hi";
import { BsPostcard } from "react-icons/bs";
import { SiGooglepodcasts } from "react-icons/si";
import { HiBriefcase } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

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

export const socialLinks: URLType[] = [
  {
    name: "facebook",
    href: "https://www.facebook.com/Geotech4all/",
    icon: FaFacebookF
  },
  {
    name: "twitter",
    href: "https://twitter.com/Geotech4All?t=akL7Vbfy0etvjULkWgXV0w&s=08",
    icon: FaTwitter
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/geotech4all/",
    icon: FaLinkedinIn
  }
]
