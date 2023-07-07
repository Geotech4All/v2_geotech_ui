import Link from "next/link";
import { OpportunityNodeDataType } from "./types";
import Image from "next/image";
import { RelativeTime } from "../common";

interface OpportunityListItemProps {
  opportunity: OpportunityNodeDataType | undefined;
  admin?: boolean;
}

export default function OpportunityListItem(props: OpportunityListItemProps) {
  const { opportunity, admin } = props;
  const slug = opportunity?.title.toLowerCase().split(" ").join("-");
  const url = `${
    admin ? "/admin" : ""
  }/opportunities/${opportunity?.opportunityId}-${slug}`;
  const logo = opportunity?.organization?.logo;

  return (
    <Link
      href={url}
      className={`
      flex-flex-col gap-3 p-3 md:p-5 duration-300 rounded-lg border
      shadow-black/5 transition hover:shadow-lg font-medium
    `}
    >
      <div className="font-nunito flex items-start justify-between">
        <div className="flex gap-2">
          <Image
            width={50}
            height={50}
            className="rounded-md"
            src={logo ? logo.url : "/image_placeholder.svg"}
            alt={logo
              ? logo.description ?? ""
              : "orgainzation logo placeholder"}
          />
          <div>
            <h5 className="font-bold line-clamp-1 text-lg">
              {opportunity?.title}
            </h5>
            <div className="text-xs flex items-center gap-3">
              {opportunity?.organization && (
                <span className="text-black/60 line-clamp-1">
                  {opportunity.organization.name}
                </span>
              )}
              {opportunity?.tags?.map((tag) => (
                <span
                  className="bg-black/5 px-2 text-black/60 rounded-lg"
                  key={tag?.tagId}
                >
                  {tag?.title}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 text-black/40 font-medium">
            <span className="hidden md:flex">Posted</span>
            <RelativeTime
              className="whitespace-nowrap"
              dateTime={opportunity?.lastUpdated ?? ""}
            />
          </div>
        </div>
      </div>
      <p className="line-clamp-2 mt-3 text-sm text-black/50">
        {opportunity?.description}
      </p>
    </Link>
  );
}
