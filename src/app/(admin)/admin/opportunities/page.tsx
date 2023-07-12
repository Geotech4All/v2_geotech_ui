import { ManageOpportunities } from "@/components";
import { LinkButton, Page } from "@/components/common";

export default function Opportunities() {
  return (
    <Page>
      <ManageOpportunities />
      <LinkButton href="/admin/opportunities/new">New Opportuntiy</LinkButton>
    </Page>
  );
}
