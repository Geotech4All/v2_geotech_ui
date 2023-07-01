"use client";
import { motion } from "framer-motion";
import { adminUrls } from "@/constants/urls";
import AdminLink from "./AdminLink";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectAdmin, setNavOpen } from "@/redux/slices/adminSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";

export default function Sidebar() {
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
    <motion.aside
      animate={{ width: admin.navOpen ? "15rem" : "5rem" }}
      className={`
        fixed h-[98vh] bg-white left-2 top-1/2 -translate-y-1/2
        rounded-lg border border-black/10 flex flex-col items-center
      `}
    >
      <div className="relative p-3 h-full w-full flex items-center gap-3 flex-col ">
        <button
          onClick={toggleNavOpen}
          className="absolute top-2 bg-black rounded-r-xl text-white text-xl p-1 -right-7"
        >
          {admin.navOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </button>
        <div className="flex items-center gap-2">
          <Image src="/icon.svg" alt="globe" width={40} height={40} />
          {admin.navOpen && <span className="font-extrabold text-xl uppercase">Geotech4all</span>}
        </div>
        <ul className="flex flex-col gap-1">
          {adminUrls.map((url) => <AdminLink key={url.href} {...url} />)}
        </ul>
      </div>
    </motion.aside>
  );
}
