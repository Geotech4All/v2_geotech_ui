"use client";
import { AnimatePresence, motion } from "framer-motion";
import { adminUrls } from "@/constants/urls";
import AdminLink from "./AdminLink";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAdmin, setNavOpen } from "@/redux/slices/adminSlice";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import React from "react";
import Image from "next/image";

export default function AdminNavBar() {
  const admin = useAppSelector(selectAdmin);
  const dispatch = useAppDispatch();

  const toggleNavOpen = () => {
    if (admin.navOpen) {
      dispatch(setNavOpen(false));
    } else {
      dispatch(setNavOpen(true));
    }
  };

  return (
    <React.Fragment>
      <motion.nav
        animate={{ height: admin.navOpen ? "16rem" : "2.5rem" }}
        className="fixed z-10 shadow p-2 top-0 w-screen flex flex-col gap-3 bg-white overflow-hidden"
      >
        <div className="flex items-center relative justify-center w-full">
          <button
            className="text-2xl absolute left-2 hover:shadow-lg rounded transition"
            onClick={toggleNavOpen}
          >
            {admin.navOpen ? <IoMdClose /> : <BiMenuAltLeft />}
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
          <ul className="flex flex-col gap-1">
            {adminUrls.map((url) => <AdminLink key={url.href} {...url} />)}
          </ul>
        </div>
      </motion.nav>
      <AnimatePresence>
        {admin.navOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={Math.random()}
            onClick={toggleNavOpen}
            className="fixed bg-black/10 inset-0"
          />
        )}
      </AnimatePresence>
    </React.Fragment>
  );
}
