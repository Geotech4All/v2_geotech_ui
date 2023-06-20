import { URLType } from "@/constants/urls";
import Link from "next/link";

export default function NavURL(props: URLType) {
  const { name, href, icon: Icon } = props;
  return (
    <Link className="flex gap-2 items-center p-5 text-lg font-medium hover:bg-black/10 transition w-fit" href={href}>
      <Icon />
      {name}
    </Link>
  )
}
