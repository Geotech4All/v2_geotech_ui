"use client";
import React from "react";
import { Modal } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

interface PageCircularProgressProps {
  show: boolean
}

export default function PageCircularProgress(props: PageCircularProgressProps) {
  const { show } = props;
  return (
    <React.Fragment>
      {show && (
        <Modal open={show}
          className="flex items-center justify-center">
          <CircularProgress />
        </Modal>
      )}
    </React.Fragment>
  )
}
