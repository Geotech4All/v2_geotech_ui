"use client";
import React from "react";
import Skeleton from "@mui/material/Skeleton";
import { NothingFound } from "@/components/common";
import OpportunityListItem from "./OpportunityListItem";
import { OpportunityEdgeDataType } from "@/components/opportunities/types";

interface OpportunityListProps {
  opportunities: OpportunityEdgeDataType[];
  admin?: boolean;
  fetching?: boolean;
}

export default function OpportunityList(props: OpportunityListProps) {
  const { opportunities, admin, fetching } = props;

  const skeletons = "6items".split("");
  return (
    <React.Fragment>
      {opportunities?.length && opportunities.length > 0
        ? (
          <ul className="flex flex-col gap-3">
            {opportunities?.map((edge) => (
              <OpportunityListItem
                admin={admin}
                key={edge?.cursor}
                opportunity={edge?.node}
              />
            ))}
          </ul>
        )
        : !fetching && opportunities.length && opportunities.length < 1 &&
          <NothingFound caption="No opportunities yet!" />}
      {fetching && (
        <ul className="flex flex-col gap-3 w-full">
          {skeletons.map((item) => (
            <div key={item}>
              <Skeleton variant="rounded" height={110} width="100%" />
            </div>
          ))}
        </ul>
      )}
    </React.Fragment>
  );
}
