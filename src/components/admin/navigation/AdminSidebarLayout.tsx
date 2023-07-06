"use client";
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { selectAdmin } from "@/redux/slices/adminSlice";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function AdminSidebarLayout(props: LayoutProps) {
  const { children } = props;
  const admin = useAppSelector(selectAdmin);
  return (
    <div className={`flex`}>
      <Sidebar />
      <motion.div
        animate={{
          marginLeft: admin.navOpen ? "17rem" : "7rem",
          width: admin.navOpen ? "78%" : "90%",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
