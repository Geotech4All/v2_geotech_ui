import Image from "next/image";
import { Metadata } from "next";
import { HTMLRederrer, Page, RelativeTime } from "@/components/common";
import { getOpportunity } from "@/components";

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
  const opportunity = await getOpportunity(id);
  return (
    <Page className="bg-white p-2 md:p-5 rounded-lg font-nunito">
      <article className="flex flex-col gap-5">
        <section className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="flex gap-2 items-start">
              <Image
                width={70}
                height={70}
                className="rounded-md border"
                alt={opportunity?.organization?.logo?.description ??
                  "image placeholder"}
                src={opportunity?.organization?.logo?.url ??
                  "/image_placeholder.svg"}
              />
              <h1 className="font-medium text-lg">{opportunity?.title}</h1>
            </div>
            <div>
              <RelativeTime
                className="text-xs md:text-base"
                dateTime={opportunity?.lastUpdated ?? ""}
              />
            </div>
          </div>
          <ul className="flex items-center gap-2">
            {opportunity?.tags?.map((tag) => (
              <span
                key={tag?.tagId}
                className="bg-black/10 capitalize text-black/60 text-sm p-1 px-2 rounded-md"
              >
                {tag?.title}
              </span>
            ))}
          </ul>
        </section>
        <section>
          <h3 className="font-bold">Project Overview</h3>
          <HTMLRederrer html={opportunity?.content ?? ""} />
        </section>
      </article>
    </Page>
  );
}

