"use client";
import {
  Autocomplete,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React, { SyntheticEvent } from "react";
import TagList from "../common/tags/TagList";
import { OpportunityDates, useTagsQuery } from "@/graphql/generated";
import { TagEdgeDataType } from "../tag/types";


interface FilterProps {
  onTagChange: (tags: TagEdgeDataType[]) => void;
  tags: TagEdgeDataType[];
  opportunityDate: OpportunityDates;
  onOpportunityDateChange: (date: OpportunityDates) => void;
}

export default function Filter(props: FilterProps) {
  const { onTagChange, tags, opportunityDate, onOpportunityDateChange } = props;
  const [{ data }] = useTagsQuery();


  const handleDateChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    onOpportunityDateChange(event.target.value as OpportunityDates);
  };

  const handleAddTag = ( _: SyntheticEvent<Element, Event>, newValue: TagEdgeDataType) => {
    if (newValue && !tags?.includes(newValue)) {
      onTagChange([...tags, newValue])
    }
  };

  const removeTag = (tag: TagEdgeDataType) => {
    const newTags = tags.filter(item => item !== tag);
    onTagChange(newTags);
  };

  return (
    <div className="border max-w-xs h-full w-full border-black/5 rounded-md">
      <div className="p-3">
        <label className="font-medium">Filter</label>
      </div>
      <hr />
      <div className="p-3">
        <section className="flex flex-col gap-2">
          <label className="text-sm">Date Post</label>
          <FormControl fullWidth>
            <Select
              color="primary"
              size="small"
              labelId="opportunity-date-label"
              id="opportunity-date-select"
              value={opportunityDate}
              onChange={handleDateChange}
            >
              <MenuItem value={OpportunityDates.Today}>Today</MenuItem>
              <MenuItem value={OpportunityDates.ThisWeek}>This Week</MenuItem>
              <MenuItem value={OpportunityDates.ThisMonth}>This Month</MenuItem>
              <MenuItem value={OpportunityDates.ThisYear}>This Year</MenuItem>
              <MenuItem value={OpportunityDates.AnyTime}>AnyTime</MenuItem>
            </Select>
          </FormControl>
          <hr className="my-3" />
        </section>
        <section className="flex flex-col gap-2">
          <label>Opportunity Tag</label>
          <Autocomplete
            size="small"
            disablePortal
            onChange={handleAddTag}
            getOptionLabel={option => option?.node?.title ?? ""}
            id="opportunity-tag-select"
            options={data?.tags?.edges ?? []}
            renderInput={(params) => <TextField {...params} label="Tag" />}
          />
          {tags && <TagList removeTag={removeTag} tags={tags} />}
        </section>
      </div>
    </div>
  );
}
