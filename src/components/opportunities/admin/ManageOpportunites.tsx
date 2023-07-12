"use client";
import React from "react";
import { usePaginatedOpportunites } from "../hooks";
import { NothingFound } from "@/components/common";
import ManageOpportuntiy from "./ManageOpportunity";

export default function ManageOpportunities() {
  const { items } = usePaginatedOpportunites({ first: 20 });
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-black/50 text-sm font-medium">Manage Opportunties</h2>
      <div className="bg-black/5 p-2 rounded-lg ">
        {items.length > 0
          ? (
            <ul className="grid grid-cols-1 gap-2">
              {items.map((item) => (
                <ManageOpportuntiy opportunity={item} key={item?.cursor} />
              ))}
            </ul>
          )
          : <NothingFound caption="No opportunites yet" />}
      </div>
    </div>
  );
}
