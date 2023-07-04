import { Aside, StaffInfo } from "@/components/admin";
import { Page } from "@/components/common";

export default function DashBoard() {
  return (
    <Page
      className={`
        mt-2 gap-2 md:gap-16 w-full flex flex-col
        sm:flex-row font-nunito
      `}
    >
      <div className="sm:flex-1">
        <StaffInfo />
      </div>
      <Aside className="sm:flex-[0.4]"/>
    </Page>
  );
}
