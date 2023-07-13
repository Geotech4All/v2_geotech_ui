import { NothingFound, Page } from "@/components/common";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Podcasts | Geotech",
    description: "Discover the latest development in the Geotech space",
  };
}

export default function Podcasts() {
  return (
    <Page>
      <NothingFound caption="No Poscasts Yet" />
    </Page>
  );
}
