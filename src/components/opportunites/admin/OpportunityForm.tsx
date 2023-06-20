"use client";
import React from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { TabPanel } from "@/components/common";
import {
  ExpandableSection,
  FieldSet,
  TextEditor,
} from "@/components/common/admin";
import { EditorTobLevelBlocks } from "@/components/common/admin/forms/inputs/TextEditor";

export default function OpportunityForm() {
  const [content, setContent] = React.useState<EditorTobLevelBlocks>();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [tab, setTab] = React.useState(0);

  const getContent = (content: EditorTobLevelBlocks) => setContent(content);

  const handleExpand = (panel: string) => {
    return function (_: React.SyntheticEvent, isExpanded: boolean) {
      setExpanded(isExpanded ? panel : false);
    };
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <FormControl className="flex flex-col gap-3" fullWidth>
      <fieldset className="bg-white rounded-t-md shadow overflow-hidden">
        <Input
          fullWidth
          size="small"
          title="Title"
          placeholder="A new opportunity"
          className="bg-white p-2 px-3 text-black/70 md:text-3xl text-2xl font-[1000]"
        />
      </fieldset>
      <fieldset className="shadow flex flex-col gap-2 p-3 bg-white rounded-md">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              aria-label="Opportunity form fields"
            >
              <Tab label={OpportunityFormTabs[0]} {...formTabProps(0)} />
              <Tab label={OpportunityFormTabs[1]} {...formTabProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <FieldSet>
              <ExpandableSection
                onChange={handleExpand("description")}
                expanded={expanded === "description"}
                label="Description"
                toolTip="Make it straight forward and uder 500 words"
              >
                <TextField
                  variant="filled"
                  placeholder="Job title / internship at Company"
                  rows={7}
                  multiline
                  fullWidth
                />
              </ExpandableSection>
              <ExpandableSection
                onChange={handleExpand("details")}
                expanded={expanded === "details"}
                label="Details"
              >
                <TextEditor />
              </ExpandableSection>
            </FieldSet>
          </TabPanel>
        </Box>
      </fieldset>
      <Button className="bg-black" type="submit" variant="contained">
      Save
      </Button>
    </FormControl>
  );
}

function formTabProps(index: number) {
  const tab = OpportunityFormTabs[index];
  return {
    id: `opportunity-${tab}-tab`,
    "aria-controls": `opportunity-${tab}-pannel`,
  };
}

enum OpportunityFormTabs {
  Content,
  Organization,
}
