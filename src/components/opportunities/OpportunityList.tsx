"use client";
import { OpportunityEdgeDataType } from "./types";
import OpportunityListItem from "./OpportunityListItem";
import React from "react";
import { NothingFound } from "../common";

interface OpportunityListProps {
  opportunities: OpportunityEdgeDataType[];
  admin?: boolean;
}

export default function OpportunityList(props: OpportunityListProps) {
  const { opportunities, admin } = props;

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
        : <NothingFound caption="No opportunities yet!" />}
    </React.Fragment>
  );
}
