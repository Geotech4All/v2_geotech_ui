"use client";
import React from "react";
import Modal from "@mui/material/Modal";
import Autocomplete from "@mui/material/Autocomplete";
import { TagForm } from "@/components/tag";
import { Maybe, TagType, useTagsQuery } from "@/graphql/generated";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";


export type TagQueryType = {
  __typename?: "TagType";
  title: string;
  description?: string | null;
  category?: string | null;
  tagId?: string | null;
} | null | undefined;


interface SelectTagsProps {
  handleSelect: (selected: TagQueryType) => void;
}

export default function SelectTags(props: SelectTagsProps) {
  const { handleSelect } = props;
  const [tagFormOpen, setTagFormOpen] = React.useState(false);
  const [{ data }, refetch] = useTagsQuery();
  const [tags, setTags] = React.useState<TagQueryType[]>([])

  React.useEffect(() => {
    const tags = data?.tags?.edges.map(edge => edge?.node)
    setTags(tags ?? [])
  }, [data])

  const handleNewTag = (_: Maybe<TagType> | undefined) => {
    refetch()
    toggleTagForm()
  }

  const handleChange = (_e: React.SyntheticEvent<Element, Event>, newValue: TagQueryType ) => {
    handleSelect(newValue)
  }

  const toggleTagForm = () => setTagFormOpen((curr) => !curr);
  return (
    <React.Fragment>
      <div className="flex fle-1 max-w-lg items-center gap-1">
        <Autocomplete
          fullWidth
          size="small"
          onChange={handleChange}
          className="whitespace-nowrap"
          getOptionLabel={(option) => option?.title ?? ""}
          options={tags}
          renderInput={(params) => (
            <TextField
              className="whitespace-nowrap"
              {...params}
              variant="standard"
              label="Tag"
            />
          )}
        />
        <Tooltip title="Add tag">
          <Button className="h-full" color="success" variant="outlined" type="button" onClick={toggleTagForm}>
            +
          </Button>
        </Tooltip>
      </div>
      <Modal
        className="flex flex-col items-center justify-center"
        onClose={toggleTagForm}
        open={tagFormOpen}
      >
        <TagForm onSuccess={handleNewTag} />
      </Modal>
    </React.Fragment>
  );
}
