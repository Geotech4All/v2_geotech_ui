"use client";
import React from "react";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionAlertProps {
  variant?: "error" | "warning" | "info" | "success";
  children?: React.ReactNode;
  after?: () => void;
  duration?: number;
}

export default function TransitionAlert(props: TransitionAlertProps) {
  const { children, after, duration, variant = "success"} = props;
  const [show, setShow] = React.useState(true);

  const arr = variant.split("")
  const cap = arr[0].toUpperCase()
  const capVariant = cap + arr.splice(1).join("");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
      after && after()
    }, duration ? duration : 2000)

    return () => clearTimeout(timeout);
  }, [after, duration])

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="w-full">
          <Alert severity={variant}>
            <AlertTitle>{capVariant}</AlertTitle>
            {children}
          </Alert>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
