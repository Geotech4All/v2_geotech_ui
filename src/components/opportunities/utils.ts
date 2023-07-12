import { QueryReturs } from "@/graphql/types";
import { graphqlQuery } from "@/graphql/utils/fetch";
import { QueryOpportunityArgs } from "@/graphql/generated";
import { OPPORTUNITY } from "@/graphql/requests/queries/Queries";

export async function getOpportunity(id: string) {
  const url = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "";
  type OpportunityReturn = typeof QueryReturs.opportunity;
  const res = await graphqlQuery<
    QueryOpportunityArgs,
    { opportunity: OpportunityReturn }
  >(
    url,
    OPPORTUNITY,
    {
      opportunityId: id,
    },
  );
  return res.data.opportunity;
}
