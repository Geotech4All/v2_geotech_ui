"use client";
import React from "react";
import { TiptapToolProps, ToolBarButton } from "..";
import { BsImage } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import { ImagePicker } from "@/components/images";
import { ImageDataType } from "@/components/images/admin/ImagePickerItem";

export default function ImageTool(props: TiptapToolProps) {
  const { editor } = props;
  const [showImagePicker, setShowImagePicker] = React.useState(false);

  const toggleImagePicker = () => setShowImagePicker((curr) => !curr);

  const handleSelectImage = (image: ImageDataType) => {
    editor?.chain().focus().setImage({
      src: image?.url ?? "",
      alt: image?.description ?? "",
      title: image?.description ?? "",
    }).run();
    toggleImagePicker();
  };

  return (
    <React.Fragment>
      <ToolBarButton
        tooltip="Insert Image"
        tooltipPlacement="left"
        onClick={toggleImagePicker}
      >
        <BsImage />
        <span>Image</span>
      </ToolBarButton>
      <Modal
        open={showImagePicker}
        onClose={toggleImagePicker}
        className="flex items-center justify-center"
      >
        <ImagePicker onSelectImage={handleSelectImage} />
      </Modal>
    </React.Fragment>
  );
}
