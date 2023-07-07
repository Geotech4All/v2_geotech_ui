import { Aside, StaffInfo, Trophies } from "@/components/admin";
import { Page } from "@/components/common";

export default async function DashBoard() {
  
  return (
    <Page
      className={`
        mt-2 gap-2 md:gap-16 flex flex-col transition-all
        sm:flex-row font-nunito w-full
    `}
    >
      <div className="sm:flex-1 flex flex-col gap-4">
        <StaffInfo />
        <Trophies />
      </div>
      <Aside className="sm:flex-[0.4]"/>
    </Page>
  );
}
