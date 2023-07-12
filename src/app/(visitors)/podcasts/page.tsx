import { NothingFound } from "@/components/common";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Podcasts | Geotech",
    description: "Discover the latest development in the Geotech space",
  };
}

export default function Podcasts() {
  return <NothingFound caption="No Poscasts Yet" />;
}
