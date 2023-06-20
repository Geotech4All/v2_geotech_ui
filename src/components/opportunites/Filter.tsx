"use client";
import { Autocomplete, FormControl, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import React, { SyntheticEvent } from "react";
import TagList from "../common/tags/TagList";

enum PostAgeOptions {
    Today,
    ThisWeek,
    ThisMonth,
    ThisYear,
    AnyTime
}

export default function Filter() {
    const [postAge, setPostAge] = React.useState(PostAgeOptions.AnyTime)
    const [tags, setTags] = React.useState<string[]>();

    const handleDateChange = (event: SelectChangeEvent) => {
        console.log(event.target.value)
        setPostAge(parseInt(event.target.value) as PostAgeOptions)
    }

    const handleAddTag = (_: SyntheticEvent<Element, Event>, newValue: string | null) => {
        if (newValue && !tags?.includes(newValue)) {
            setTags(curr => curr ? [...curr, newValue] : [newValue])
        }
    }

    const removeTag = (tag: string) => {
        setTags(curr => curr?.filter(item => item != tag))
    }

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
                        <Select color="primary" size="small"
                            labelId="opportunity-date-label"
                            id="opportunity-date-select"
                            value={postAge.toString()}
                            onChange={handleDateChange}>
                            <MenuItem value={PostAgeOptions.Today}>Today</MenuItem>
                            <MenuItem value={PostAgeOptions.ThisWeek}>This Week</MenuItem>
                            <MenuItem value={PostAgeOptions.ThisMonth}>This Month</MenuItem>
                            <MenuItem value={PostAgeOptions.ThisYear}>This Year</MenuItem>
                            <MenuItem value={PostAgeOptions.AnyTime}>AnyTime</MenuItem>
                        </Select>
                    </FormControl>
                    <hr className="my-3" />
                </section>
                <section className="flex flex-col gap-2">
                    <label>Opportunity Tag</label>
                    <Autocomplete size="small"
                        disablePortal
                        onChange={handleAddTag}
                        id="opportunity-tag-select"
                        options={demoTags}
                        renderInput={params => <TextField {...params} label="Tag" />} />
                    {tags && <TagList removeTag={removeTag} tags={tags} />}
                </section>
            </div>
        </div>
    )
}

const demoTags = ["Job listing", "Internship", "Scholarship"]
