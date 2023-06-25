import Link from "next/link";
import { OpportunityNodeDataType } from "./types";
import Image from "next/image";

interface OpportunityListItemProps {
  opportunity: OpportunityNodeDataType | undefined;
  admin?: boolean;
}

export default function OpportunityListItem(props: OpportunityListItemProps) {
  const { opportunity, admin } = props;
  const slug = opportunity?.title.toLowerCase().split(" ").join("-");
  const url = `${admin ? "/admin" : ""}/opportunities/${
    opportunity?.opportunityId
  }-${slug}`;
  const logo = opportunity?.organization?.logo;

  return (
    <Link href={url} className={`
      flex-flex-col gap-3 p-2 py-4 duration-300 rounded-lg border
      shadow-black/5 transition hover:shadow-lg
    `}>
      <div className="font-nunito">
        <div className="flex gap-2">
          <Image
            width={50}
            height={50}
            className="rounded-md"
            src={logo ? logo.url : "/image_placeholder.svg"}
            alt={
              logo ? logo.description ?? "" : "orgainzation logo placeholder"
            }
          />
          <div>
            <h3 className="font-medium text-base">{opportunity?.title}</h3>
            <div className="text-xs flex items-center gap-3">
              {opportunity?.organization && (
                <span className="text-black/60">
                  {opportunity.organization.name}
                </span>
              )}
              {opportunity?.tags?.map((tag) => (
                <span className="bg-black/5 px-2 text-black/60 rounded-lg" key={tag?.tagId}>{tag?.title}</span>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <p className="line-clamp-2 text-sm text-black/50">
        {opportunity?.description}
      </p>
    </Link>
  );
}
