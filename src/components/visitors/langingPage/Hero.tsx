import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export default function Hero() {
  return(
    <section className="relative flex flex-col justify-center md:grid md:grid-cols-2 items-center justify-items-center z-0">
      <BackgroundMap />
      <div className="flex-1">
        <div className="flex flex-col gap-4 p-5">
          <h1 className="text-4xl font-medium">
            Redefining <span className="font-extrabold md:text-7xl text-4xl">Geology</span> with
          <br />
          <span className="font-extrabold md:text-8xl text-4xl">Technology</span>
          </h1>
          <Link className={`
            flex text-white font-bold text-2xl bg-black group gap-3 relative overflow-hidden
            rounded transition-all duration-500 hover:rounded-[4rem] hover:pr-16 p-2 px-4 w-fit items-center`} href="/about">
            <span className="whitespace-nowrap">Learn How</span>
            <span className={`
              bg-white transition-all duration-500 opacity-0 group-hover:opacity-100
              p-2 rounded-full aspect-square text-black absolute right-1
            `}><BsArrowRightShort /></span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col z-0 relative w-fit items-baseline">
        <div className="md:aspect-square z-0 w-full translate-x-6 md:translate-x-52 md:translate-y-32">
          <Image
            width="1000"
            height="600"
            src="/laptop_map2.webp"
            alt="maping on a laptop"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}


function BackgroundMap() {
  return (
    <div className="absolute top-0 -z-10 right-0">
      <div className="relative">
        <Image
          className="aspect-video object-cover"
          height={600}
          width={1000}
          alt="street map"
          src="/street_map.svg"
        />
        <div className="bg-gradient-radial-sm bottom-0 left-0 -right-60 -top-52 absolute" />
      </div>
    </div>
  );
}
