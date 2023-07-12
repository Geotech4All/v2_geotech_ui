import { NothingFound } from "@/components/common";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Podcast Admin | Geotech",
    description: "Manage podcasts",
  };
}
export default function AdminPodcasts() {
  return <NothingFound caption="Comming soon" />;
}
