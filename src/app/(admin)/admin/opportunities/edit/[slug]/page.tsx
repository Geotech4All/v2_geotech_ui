import { Page } from "@/components/common";
import { OpportunityForm, getOpportunity } from "@/components";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;
  const { slug } = params;
  const opportuntiyId = slug.split("-")[0];
  const opportunity = await getOpportunity(opportuntiyId);
  return {
    title: `Edit ${opportunity?.title ?? ""}`,
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

export default async function EditOpportunity(props: PageProps) {
  const { params } = props;
  const { slug } = params;
  const opportuntiyId = slug.split("-")[0];
  const opportunity = await getOpportunity(opportuntiyId);
  return (
    <Page>
      <OpportunityForm initialOpportunity={opportunity} />
    </Page>
  );
}
