"use client";
import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Tooltip from "@mui/material/Tooltip";
import "./styles.scss";

interface SectionProps {
  children?: React.ReactNode;
  label: string;
  expanded: boolean;
  toolTip?: string;
  onChange: (event: React.SyntheticEvent, expanded: boolean) => void;
}
export default function ExpandableSection(props: SectionProps) {
  const { children, toolTip, label, onChange } = props;
  return (
    <Accordion sx={{ boxShadow: "none" }} onChange={onChange}>
      <AccordionSummary
        id={`${label}-input-header`}
        aria-controls={`${label}-input-panel`}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
        expandIcon={<ExpandMore />}
      >
        <Tooltip placement="right" arrow title={toolTip}>
          <legend className="flex items-center gap-1 font-medium text-lg">
            {label}
          </legend>
        </Tooltip>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
