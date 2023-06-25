"use client";

import { NothingFound } from "@/components/common";
import { ImageList } from "@mui/material";
import ImagePickerItem, { ImageDataType } from "./ImagePickerItem";

interface ExistingImageProps {
  images: ImageDataType[]
  onSelectImage: (image: ImageDataType) => void;
}

export default function ExistingImage(props: ExistingImageProps) {
  const { images, onSelectImage } = props;
  return (
    <div className="overflow-y-auto h-screen max-h-[70vh]">
      <div>
        <input
          placeholder="Search image"
          className="w-full p-1 px-2 rounded text-lg shadow outline-none"
        />
      </div>
      {images.length > 0 ? (
        <ImageList>
          {images.map((image) => (
            <ImagePickerItem onSelect={onSelectImage} key={image?.imageId} image={image} />
          )) }
        </ImageList>
      ): <NothingFound caption="No images yet"/>}
    </div>
  )
}
