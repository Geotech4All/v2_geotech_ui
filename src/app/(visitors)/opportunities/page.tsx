"use client";
import { ErrorAlert, Page } from "@/components/common";
import {
  Filter,
  OpportunityList,
  Search,
  usePaginatedOpportunites,
} from "@/components/opportunities";
import { TagEdgeDataType } from "@/components/tag/types";
import { OpportunityDates } from "@/graphql/generated";
import { hasReachedBottom, hasScrolledDown } from "@/utils/scroll";
import React from "react";

export default function Opportunites() {
  const [title, setTitle] = React.useState<string>();
  const [tags, setTags] = React.useState<TagEdgeDataType[]>([]);
  const [datePosted, setDatePosted] = React.useState<OpportunityDates>(
    OpportunityDates.AnyTime,
  );
  const pageSize = 20;
  const { items, error, fetching, loadMore } = usePaginatedOpportunites({
    datePosted,
    first: pageSize,
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

  const handleScroll: React.UIEventHandler = (e) => {
    if (hasReachedBottom(e)) {
      loadMore(items.pop()?.cursor);
    }
  };

  return (
    <Page>
      <div className="flex gap-3 w-full">
        <Filter
          onOpportunityDateChange={handleUpdateDatePosted}
          opportunityDate={datePosted}
          onTagChange={handleUpdateTag}
          tags={tags}
        />
        <div
          onScroll={handleScroll}
          className={`
            flex-1 max-h-screen scrollbar-none overflow-y-auto
            md:ml-[21rem] flex flex-col gap-3
          `}
        >
          <Search onSearch={handleChangeTitle} />
          {error && <ErrorAlert error={error.message} />}
          {!error && (
            <OpportunityList fetching={fetching} opportunities={items} />
          )}
        </div>
      </div>
    </Page>
  );
}
