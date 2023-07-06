import { Aside, StaffInfo } from "@/components/admin";
import { Page } from "@/components/common";

export default function DashBoard() {
  return (
    <Page
      className={`
        mt-2 gap-2 md:gap-16 flex flex-col transition-all
        sm:flex-row font-nunito w-full
    `}
    >
      <div className="sm:flex-1">
        <StaffInfo />
      </div>
      <Aside className="sm:flex-[0.4]"/>
    </Page>
  );
}
