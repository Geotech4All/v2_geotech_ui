"use client";
import React from "react";
import { useCreateUpdateOrganizationMutation } from "@/graphql/generated";
import { Button, Modal, TextField } from "@mui/material";
import { ErrorAlert, PageCircularProgress } from "@/components/common";
import Image from "next/image";
import { ImageDataType } from "@/components/images/admin/ImagePickerItem";
import { ImagePicker } from "@/components/images";
import { OrganizationDataType } from "./types";

interface OrganizationFormProps {
  initialOrg?: OrganizationDataType;
  onSuccess?: (org: OrganizationDataType) => void;
}

export default function OrganizationForm(props: OrganizationFormProps) {
  const { initialOrg, onSuccess } = props;
  const [{ fetching, error }, saveOrg] = useCreateUpdateOrganizationMutation();
  const [logo, setLogo] = React.useState<ImageDataType>();
  const [showImagePicker, setShowImagePicker] = React.useState(false);

  const nameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSetLogo = (image: ImageDataType) => {
    setLogo(image);
    toggleImagePicker();
  };
  const toggleImagePicker = () => setShowImagePicker((curr) => !curr);

  const handleSaveOrg: React.FormEventHandler = (e) => {
    e.preventDefault();
    saveOrg({
      logoId: logo?.imageId,
      name: nameRef.current.value,
      description: descRef.current.value,
      organizationId: initialOrg?.organizationId,
    }).then((res) => {
      const result = res.data?.createUpdateOrganization;
      if (!result?.errors) {
        onSuccess && onSuccess(result?.organization);
      }
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSaveOrg} className="flex flex-col gap-3">
        {error && <ErrorAlert error={error} />}
        <div className="flex gap-3 items-center">
          <Image
            width={50}
            height={50}
            src={logo ? logo.url : "/image_placeholder.svg"}
            className="rounded-full aspect-square object-cover border"
            alt={logo ? logo.description ?? "" : "image placeholder"}
          />
          <TextField
            required
            fullWidth
            size="small"
            label="Organization name"
            inputRef={nameRef}
            defaultValue={initialOrg?.name}
            placeholder="Cool Organization"
          />
        </div>
        <TextField
          rows={5}
          multiline
          fullWidth
          size="small"
          inputRef={descRef}
          label="(Optional) Description of this organization"
          defaultValue={initialOrg?.description}
          placeholder="Organization, summary, location e.t.c"
        />
        <div className="flex items-center justify-between">
          <Button
            onClick={toggleImagePicker}
            color="success"
            variant="outlined"
            type="button"
            className="w-fit"
          >
            Add Logo
          </Button>
          <Button
            className="bg-green-600 w-fit"
            color="success"
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
      <PageCircularProgress show={fetching} />
      <Modal
        className="flex flex-col items-center justify-center"
        open={showImagePicker}
        onClose={toggleImagePicker}
      >
        <ImagePicker onSelectImage={handleSetLogo} />
      </Modal>
    </React.Fragment>
  );
}
