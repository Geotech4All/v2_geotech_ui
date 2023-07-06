import { Page } from "@/components/common";

interface OpportunityDetailsProps {
  params: {
    slug: string;
  };
}

export default function OpportunityDetails(props: OpportunityDetailsProps) {
  const { params } = props;
  console.log(params)
  return (
    <Page>
      Opportunity
    </Page>
  )
}
