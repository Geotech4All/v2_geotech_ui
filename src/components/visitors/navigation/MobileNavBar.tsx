"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { visitoUrls } from "@/constants/urls";
import MobileLink from "./MobileLink";

export default function MobileNavBar() {
  const [navOpen, setNavOpen] = React.useState(false);
  const toggleNav = () => setNavOpen((curr) => !curr);
  return (
    <React.Fragment>
      <div className="block md:hidden">
        <motion.nav
          animate={{
            height: navOpen ? "13rem" : "2.7rem",
            borderBottomRightRadius: navOpen ? "1rem" : "0rem",
            borderBottomLeftRadius: navOpen ? "1rem" : "0rem",
          }}
          className="fixed top-0 z-20 overflow-hidden w-screen shadow bg-white"
        >
          <div className="flex shadow-md items-center p-2 relative justify-center">
            <button className="absolute left-3 text-2xl" onClick={toggleNav}>
              {navOpen ? <MdClose /> : <BiMenuAltLeft />}
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
            <ul className="p-2 flex flex-col gap-0.5">
              {visitoUrls.map((url) => (
                <MobileLink key={url.href} url={url} onClick={toggleNav} />
              ))}
            </ul>
          </div>
        </motion.nav>
        {navOpen && (
          <div
            onClick={toggleNav}
            key={Math.random()}
            className="fixed z-10 inset-0 bg-black/10"
          />
        )}
      </div>
    </React.Fragment>
  );
}
