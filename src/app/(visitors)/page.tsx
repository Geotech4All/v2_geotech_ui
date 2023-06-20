import { Page } from "@/components/common";
import { Hero, Blog, Podcast } from "@/components/visitors/langingPage";


export default function HomePage() {
  return (
    <Page className="max-w-[100vw] flex flex-col gap-8 overflow-hidden">
      <Hero />
      <Blog />
      <Podcast />
    </Page>
  );
}

