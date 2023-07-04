"use client";
import {
  Autocomplete,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
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
  const [showFilter, setShowFilter] = React.useState(false);

  const isMidScreen = useMediaQuery("(min-width: 768px)");

  const toggleShowFilter = () => setShowFilter((curr) => !curr);

  const handleDateChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    onOpportunityDateChange(event.target.value as OpportunityDates);
  };

  const handleAddTag = (
    _: SyntheticEvent<Element, Event>,
    newValue: TagEdgeDataType,
  ) => {
    if (newValue && !tags?.includes(newValue)) {
      onTagChange([...tags, newValue]);
    }
  };

  const removeTag = (tag: TagEdgeDataType) => {
    const newTags = tags.filter((item) => item !== tag);
    onTagChange(newTags);
  };

  return (
    <React.Fragment>
      <AnimatePresence>
        {showFilter && !isMidScreen && (
          <motion.div
            key={Math.random()}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={toggleShowFilter}
            className="fixed inset-0 bg-black/5"
          />
        )}
      </AnimatePresence>
      <motion.aside
        animate={{
          translateX: !isMidScreen && !showFilter ? "-104%" : "0%",
          transition: {
            duration: 0.5,
          },
        }}
        className="border z-0 fixed h-fit max-w-xs bg-white w-full border-black/5 rounded-md"
      >
        <div className="relative">
          {!isMidScreen && (
            <button
              type="button"
              onClick={toggleShowFilter}
              className={`
            absolute top-8 p-0.5 px-3 rounded-t rotate-90 text-sm
            -right-[2.5rem] font-nunito bg-black text-white font-medium
          `}
            >
              Filter
            </button>
          )}
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
                  <MenuItem value={OpportunityDates.ThisWeek}>
                    This Week
                  </MenuItem>
                  <MenuItem value={OpportunityDates.ThisMonth}>
                    This Month
                  </MenuItem>
                  <MenuItem value={OpportunityDates.ThisYear}>
                    This Year
                  </MenuItem>
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
                getOptionLabel={(option) => option?.node?.title ?? ""}
                id="opportunity-tag-select"
                options={data?.tags?.edges ?? []}
                renderInput={(params) => <TextField {...params} label="Tag" />}
              />
              {tags && <TagList removeTag={removeTag} tags={tags} />}
            </section>
          </div>
        </div>
      </motion.aside>
    </React.Fragment>
  );
}
