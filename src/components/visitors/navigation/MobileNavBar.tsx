"use client";
import Image from "next/image";
import React from "react";
import { BsMenuDown } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function MobileNavBar() {
  const [navOpen, setNavOpen] = React.useState(false);
  const toggleNav = () => setNavOpen((curr) => !curr);
  return (
    <nav className="fixed top-0 w-screen shadow">
      <div className="flex items-center relative justify-center">
        <button className="absolute" onClick={toggleNav}>
          {navOpen ? <MdClose /> : <BsMenuDown />}
        </button>
          <Image
            className="self-center"
            src="/logo.svg"
            alt="geotech"
            width={200}
            height={50}
          />
      </div>
      <div className="relative h-full w-full">
      </div>
    </nav>
  );
}
