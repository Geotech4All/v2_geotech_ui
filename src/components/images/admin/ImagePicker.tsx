"use client";

import { useImagesQuery } from "@/graphql/generated";
import { PageCircularProgress, TabPanel } from "@/components/common";
import { ImageDataType } from "./ImagePickerItem";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import ExistingImage from "./ExistingImages";
import ImageForm from "./ImageForm";

interface ImagePickerProps {
  onSelectImage: (image: ImageDataType) => void;
}

export default function ImagePicker(props: ImagePickerProps) {
  const { onSelectImage } = props;
  const [tab, setTab] = React.useState(0);
  const [{ fetching, data }] = useImagesQuery();
  const [imageData, setImageData] = React.useState<ImageDataType[]>([]);

  const handleTabChange = (_e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  React.useEffect(() => {
    const newImages = (data?.images?.edges ?? []).map((edge) => edge?.node);
    setImageData(newImages);
  }, [data]);


  return (
    <div className="w-full p-2 bg-white rounded-md max-w-3xl relative">
      <div>
        <Tabs value={tab} onChange={handleTabChange}>
          <Tab label="Select" />
          <Tab label="New" />
        </Tabs>
        <TabPanel index={0} value={tab}>
          <ExistingImage images={imageData} onSelectImage={onSelectImage} />
        </TabPanel>
        <TabPanel index={1} value={tab}>
          <ImageForm onSuccess={onSelectImage} />
        </TabPanel>
      </div>
      <PageCircularProgress show={fetching} />
    </div>
  );
}
