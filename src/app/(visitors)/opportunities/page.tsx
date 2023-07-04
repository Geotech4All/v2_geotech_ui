"use client";
import { ErrorAlert, Page } from "@/components/common";
import {
  Filter,
  OpportunityList,
  Search,
  usePaginatedOpportunites,
} from "@/components/opportunites";
import { TagEdgeDataType } from "@/components/tag/types";
import { OpportunityDates } from "@/graphql/generated";
import React from "react";

export default function Opportunites() {
  const [title, setTitle] = React.useState<string>();
  const [tags, setTags] = React.useState<TagEdgeDataType[]>([]);
  const [datePosted, setDatePosted] = React.useState<OpportunityDates>(
    OpportunityDates.AnyTime,
  );
  const { items, error } = usePaginatedOpportunites({
    datePosted,
    title_Icontains: title,
    tags_Id_In: tags.map((tag) => tag?.node?.tagId ?? ""),
  });

  const handleChangeTitle = (title?: string) => setTitle(title);

  const handleUpdateTag = (tags: TagEdgeDataType[]) => {
    setTags(tags);
  };

  const handleUpdateDatePosted = (date: OpportunityDates) => {
    setDatePosted(date);
  };

  console.log(error?.message)

  return (
    <Page>
      <div className="flex gap-3 w-full">
        <Filter
          onOpportunityDateChange={handleUpdateDatePosted}
          opportunityDate={datePosted}
          onTagChange={handleUpdateTag}
          tags={tags}
        />
        <div className="flex-1 md:ml-[21rem] flex flex-col gap-3">
          <Search onSearch={handleChangeTitle} />
          {error && <ErrorAlert error={error.message} />}
          {!error && <OpportunityList opportunities={items} />}
        </div>
      </div>
    </Page>
  );
}
