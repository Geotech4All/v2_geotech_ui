"use client";
import { Page } from "@/components/common";
import { Filter, OpportunityList, Search } from "@/components/opportunites";
import { OpportunityEdgeDataType } from "@/components/opportunites/types";
import { TagEdgeDataType } from "@/components/tag/types";
import { OpportunityDates, useOpportunitiesQuery } from "@/graphql/generated";
import React from "react";

export default function Opportunites() {
  const [title, setTitle] = React.useState<string>();
  const [tags, setTags] = React.useState<TagEdgeDataType[]>([]);
  const [datePosted, setDatePosted] = React.useState<OpportunityDates>(
    OpportunityDates.AnyTime
  );
  const [{ data }] = useOpportunitiesQuery({
    variables: {
      tagsIdIn: tags.map((tag) => tag?.node?.tagId ?? ""),
      datePosted,
      titleIcontains: title,
    },
  });

  const [opportunities, setOpportunities] =
    React.useState<OpportunityEdgeDataType>([]);

  const handleChangeTitle = (title?: string) => setTitle(title)

  const handleUpdateTag = (tags: TagEdgeDataType[]) => {
    setTags(tags);
  };

  const handleUpdateDatePosted = (date: OpportunityDates) => {
    setDatePosted(date);
  };

  React.useEffect(() => {
    if (data?.opportunities?.edges)
      setOpportunities([...data?.opportunities?.edges]);
  }, [data]);

  return (
    <Page>
      <div className="flex gap-3 w-full">
        <Filter
          onOpportunityDateChange={handleUpdateDatePosted}
          opportunityDate={datePosted}
          onTagChange={handleUpdateTag}
          tags={tags}
        />
        <div className="flex-1 flex flex-col gap-3">
          <Search onSearch={handleChangeTitle} />
          <OpportunityList opportunities={opportunities} />
        </div>
      </div>
    </Page>
  );
}
