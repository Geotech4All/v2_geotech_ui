import { Aside, StaffInfo } from "@/components/admin";
import { Page } from "@/components/common";

export default function DashBoard() {
  return (
    <Page className="mt-2 font-nunito">
      <div>
        <StaffInfo />
      </div>
      <Aside />
    </Page>
  )
}
