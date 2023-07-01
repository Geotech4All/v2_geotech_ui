"use client";
import React from "react";
import { ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";

export type ImageDataType =
  | {
    __typename?: "ImageType" | undefined;
    description?: string | null | undefined;
    url: string;
    imageId?: string | null | undefined;
  }
  | null
  | undefined;

interface ImagePickerItemProps {
  image: ImageDataType;
  onSelect: (image: ImageDataType) => void;
}

export default function ImagePickerItem(props: ImagePickerItemProps) {
  const { image, onSelect } = props;

  const handleClick: React.MouseEventHandler = () => {
    onSelect(image);
  };

  const handleKeyDown: React.KeyboardEventHandler = () => {
    onSelect(image);
  };

  return (
    <button type="button" onClick={handleClick} onKeyDown={handleKeyDown}>
      <ImageListItem key={image?.imageId}>
        <Image
          width={248}
          height={171}
          src={image?.url ?? ""}
          alt={image?.description ?? ""}
        />
        <ImageListItemBar className="line-clamp-2" title={image?.description} />
      </ImageListItem>
    </button>
  );
}
