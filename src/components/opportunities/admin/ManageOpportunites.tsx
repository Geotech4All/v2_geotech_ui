"use client";
import React from "react";
import { usePaginatedOpportunites } from "../hooks";
import { NothingFound } from "@/components/common";
import ManageOpportuntiy from "./ManageOpportunity";
import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";

export default function ManageOpportunities() {
  const { items, fetching } = usePaginatedOpportunites({ first: 20 });
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-black/50 text-sm font-medium">Manage Opportunties</h2>
      <div className="bg-black/5 p-2 rounded-lg ">
        {items.length > 0 &&
          (
            <ul className="grid grid-cols-1 gap-2">
              {items.map((item) => (
                <ManageOpportuntiy opportunity={item} key={item?.cursor} />
              ))}
            </ul>
          )}
        {!fetching && items.length < 1 && (
          <NothingFound caption="No opportunites yet" />
        )}
        {fetching && (
          <Stack spacing={2} sx={{ width: "100%"}}>
            {"6items".split("").map((item) => (
              <div className="flex items-center justify-between" key={item}>
                <div className="flex items-center gap-2">
                  <Skeleton width={50} height={50} variant="circular" />
                  <Skeleton
                    height={30}
                    width={200}
                    variant="text"
                    sx={{ fontSize: "3rem" }}
                  />
                </div>
                <div className="items-center gap-5 hidden md:flex">
                  <Skeleton
                    height={25}
                    width={80}
                    variant="rounded"
                  />
                  <Skeleton
                    height={25}
                    width={80}
                    variant="rounded"
                  />
                </div>
              </div>
            ))}
          </Stack>
        )}
      </div>
    </div>
  );
}
