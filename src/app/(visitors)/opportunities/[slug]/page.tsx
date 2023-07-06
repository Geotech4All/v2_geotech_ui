import { Page } from "@/components/common";
import { QueryReturs } from "@/graphql/types";
import { graphqlQuery } from "@/graphql/utils/fetch";
import { QueryOpportunityArgs } from "@/graphql/generated";
import { OPPORTUNITY } from "@/graphql/requests/queries/Queries";
import { Metadata } from "next";

interface OpportunityDetailsProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  props: OpportunityDetailsProps,
): Promise<Metadata> {
  const { params } = props;
  const id = params.slug.split("-")[0];
  const opportunity = await getOpportunity(id);

  return {
    title: opportunity?.title ?? "",
    description: opportunity?.description,
    openGraph: {
      type: "article",
      title: opportunity?.title ?? "",
      description: opportunity?.description ?? "",
      url: `https://geotech4all.com/opportunities/${params.slug}`,
      publishedTime: opportunity?.lastUpdated ?? "",
      images: [
        {
          url: opportunity?.organization?.logo?.url ?? "",
          alt: opportunity?.organization?.logo?.description ?? "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: opportunity?.title ?? "",
      images: [opportunity?.organization?.logo?.url ?? ""],
      description: opportunity?.description ?? "",
      creator: "@creator",
      site: "@site",
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
  };
}

export default async function OpportunityDetails(
  props: OpportunityDetailsProps,
) {
  const { params } = props;
  const id = params.slug.split("-")[0];
  await getOpportunity(id);
  return (
    <Page>
      Opportunity
    </Page>
  );
}

async function getOpportunity(id: string) {
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
