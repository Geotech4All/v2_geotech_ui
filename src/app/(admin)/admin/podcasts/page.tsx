import { NothingFound, Page } from "@/components/common";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Podcast Admin | Geotech",
    description: "Manage podcasts",
  };
}
export default function AdminPodcasts() {
  return (
    <Page>
      <NothingFound caption="No Poscasts Yet" />
    </Page>
  );
}
