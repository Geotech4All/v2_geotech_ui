import {
  NothingFound,
  PageCircularProgress,
  TabPanel,
} from "@/components/common";
import { useOrganizationsQuery } from "@/graphql/generated";
import { Box, List, ListItemButton, Tab, Tabs } from "@mui/material";
import React from "react";
import OrganizationForm from "./OrganizationForm";
import { OrganizationDataType } from "./types";
import Image from "next/image";

interface SelectOrganizationProps {
  onSelectOrg?: (org: OrganizationDataType) => void;
}

export default function SelectOrganization(props: SelectOrganizationProps) {
  const { onSelectOrg } = props;
  const [tab, setTab] = React.useState(0);
  const [{ data, fetching }] = useOrganizationsQuery();
  const [orgs, setOrgs] = React.useState<OrganizationDataType[]>([]);

  const handleTabChange = (_e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    const orgs = data?.organizations?.edges.map((edge) => edge?.node);
    setOrgs(orgs ?? []);
  }, [data]);

  const selectOrgFactory = (org: OrganizationDataType) => {
    return function() {
      onSelectOrg && onSelectOrg(org);
    };
  };


  return (
    <div className="h-screen max-h-[70vh] overflow-y-auto bg-white w-full max-w-2xl p-2 rounded-md">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Select" />
          <Tab label="New" />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        {orgs && orgs?.length > 0 ? (
          <List>
            {orgs.map(org => (
              <ListItemButton onClick={selectOrgFactory(org)} className="flex gapx rounded-md items-center" key={org?.organizationId}>
                <Image
                  width={50}
                  height={50}
                  className="aspect-square rounded-full border"
                  src={org?.logo?.url ?? "/image_placeholder.svg"}
                  alt={org?.logo?.description ?? "organization logo"}
                />
                <span className="text-lg font-medium">{org?.name}</span>
              </ListItemButton>
            ))}
          </List>
        ) : (
          <NothingFound caption="No organizations yet" />
        )}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <OrganizationForm onSuccess={onSelectOrg} />
      </TabPanel>
      <PageCircularProgress show={fetching} />
    </div>
  );
}
