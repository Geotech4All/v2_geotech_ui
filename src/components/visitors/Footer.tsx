import { URLType, socialLinks, visitoUrls } from "@/constants/urls";
import Link from "next/link";
import {Nunito} from "next/font/google"
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})

export default function Footer() {
  return (
    <footer className={`${nunito.className} flex flex-col gap-3 relative border py-3 border-transparent border-t-black/10`}>
      <p className="flex items-center gap-3 self-end px-10">
        <Image src="/icon.svg" alt="geotech logo" width={50} height={25}/>
        <span className="font-bold text-3xl">geotech4all</span>
      </p>
      <hr className="w-screen"/>
      <div className="grid p-3 grid-cols-1 sm:grid-cols-2 lg:px-10 md:grid-cols-3">
        <section className="flex flex-col gap-2">
          <label className="font-bold text-xl">Follow Us</label>
          <ul className="flex items-center gap-3">
            {socialLinks.map(link => <SocialLink key={link.href} {...link}/>)}
          </ul>
        </section>
        <section className="flex flex-col gap-2">
          <label className="font-bold text-xl">Quick liks</label>
          <div className="grid grid-cols-2">
            {visitoUrls.map(url => <VisitorLink key={url.href} {...url}/>)}
          </div>
        </section>
        <section>
        </section>
      </div>
    </footer>
  )
}

function SocialLink(props: URLType) {
  const { icon: Icon, href} = props;
  return (
    <Link className="aspect-square rounded-full p-1 border border-black/10 hover:bg-black/10 transition-all" href={href}>
      <Icon />
    </Link>
  )
}

function VisitorLink(props: URLType) {
  const { name, href } = props;
  return (
    <Link className="hover:text-black/20 font-medium transition" href={href}>
      {name}
    </Link>
  )
  }
