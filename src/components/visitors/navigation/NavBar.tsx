import { visitoUrls } from "@/constants/urls";
import NavURL from "./NavUrl";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex fixed top-0 w-screen backdrop-blur-lg z-10 items-center">
      <div className="flex-1 flex items-start">
        <Link className="flex items-center w-fit p-3 justify-center h-full" href="/">
          <Image className="max-w-[3rem]" width={100} height={60} src="/icon_black.svg" alt="mountain scape" />
        </Link>
      </div>
      <ul className="flex-1 flex">
        {visitoUrls.map((url, index) => <NavURL key={`url.name-${index}`} {...url}/>)}
      </ul>
    </nav>
  )
}
