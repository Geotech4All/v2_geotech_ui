"use client";
import React from "react";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  className?: string;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, index, value, className } = props;

  return (
    <div role="tabpanel" className={className} hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}
