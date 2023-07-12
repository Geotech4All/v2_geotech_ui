import { visitoUrls } from "@/constants/urls";
import NavURL from "./NavUrl";
import Image from "next/image";
import Link from "next/link";

export default function DesktopNavBar() {
  return (
    <nav className="hidden fixed md:flex top-0 w-screen backdrop-blur-lg z-10 items-center">
      <div className="flex-1 flex items-start">
        <Link className="flex items-center gap-3 w-fit p-3 justify-center h-full" href="/">
          <Image className="max-w-[3rem]" width={40} height={40} src="/icon.svg" alt="mountain scape" />
          <span className="uppercase text-xl font-medium">Geotech4all</span>
        </Link>
      </div>
      <ul className="flex-1 flex">
        {visitoUrls.map((url, index) => <NavURL key={`url.name-${index}`} {...url}/>)}
      </ul>
    </nav>
  );
}
