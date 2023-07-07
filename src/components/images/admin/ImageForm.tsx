"use client";
import { ErrorAlert, PageCircularProgress } from "@/components/common";
import {
  ImageFoldersEnum,
  ImageType,
  useCreateUpdateImageMutation,
} from "@/graphql/generated";
import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ImageDataType } from "./ImagePickerItem";

interface ImageFormProps {
  initialImage?: ImageType;
  imageFolder?: ImageFoldersEnum;
  onSuccess?: (image: ImageDataType) => void;
}

export default function ImageForm(props: ImageFormProps) {
  const { initialImage, imageFolder, onSuccess } = props;
  const [{ fetching, error }, upload] = useCreateUpdateImageMutation();
  const [uploadError, setUploadError] = React.useState<any>();
  const [dragActive, setDragActive] = React.useState(false);
  const [image, setImage] = React.useState<File>();
  const [imageError, setImageError] = React.useState<string>();

  const descRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleDrag: React.DragEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImageError(undefined);
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop: React.DragEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.split("/")[0] === "image") {
        setImage(file);
      } else {
        setImageError(`${file.type} is not an accepted file format`);
      }
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageError(undefined);
    }
  };

  const handleUploadImage: React.FormEventHandler = (e) => {
    e.preventDefault();
    upload({
      image,
      folder: imageFolder,
      imageId: initialImage?.imageId,
      description: descRef.current.value,
    }).then((res) => {
      const img = res.data?.createUpdateImage;
      if (img?.success) {
        onSuccess && onSuccess(img?.image);
      } else if (img?.errors) {
        setUploadError(img.errors);
      }
    });
  };

  return (
    <form
      onSubmit={handleUploadImage}
      className="overflow-y-auto relative z-0 font-nunito h-screen max-h-[70vh]"
    >
      <fieldset className="w-full h-full flex z-0 flex-col gap-2 items-center relative justify-center">
        <p className="font-bold text-2xl">PNG, JPG, SVG and WEBp</p>
        {uploadError && <ErrorAlert error={uploadError} />}
        {uploadError || error && <ErrorAlert error={error ?? uploadError} />}
        {!image ? (
          <div
            onDragEnter={handleDrag}
            className={`
            w-full h-full border-2 border-dashed border-spacing-4 rounded-md
            ${dragActive ? "border-black/80" : ""} transition-all
          `}
          >
            <label
              htmlFor="image-dnd"
              className={`
            flex w-full text-lg font-semibold h-full justify-center
            items-center text-center flex-col cursor-pointer
          `}
            >
              <span>
                Drag and Drop <br />
              </span>
              <span>
                or <em className="text-violet-500">click here</em> to select
                file
              </span>
            </label>
          </div>
        ) : (
          <div className="h-full flex flex-col max-h-[90%] overflow-y-auto items-center w-full">
            <Image
              width={500}
              height={280}
              src={URL.createObjectURL(image)}
              alt={"new image"}
            />
            <div
              className={`
              flex items-center absolute p-2 gap-2
              rounded-md bg-white bottom-0 w-full max-w-[97%]
            `}
            >
              <div className="border w-full rounded">
                <input
                  ref={descRef}
                  defaultValue={initialImage?.description ?? ""}
                  className="w-full p-1.5 px-2 bg-white/40 outline-none"
                  placeholder="(Optional) Description: will be used to search for this image"
                />
              </div>
              <Button
                type="submit"
                color="success"
                className="h-full bg-green-600"
                variant="contained"
              >
                Save
              </Button>
            </div>
          </div>
        )}
      </fieldset>
      <input
        onChange={handleChange}
        accept="image/*"
        type="file"
        id="image-dnd"
        className="hidden"
      />
      {dragActive && (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className="absolute z-10 inset-0"
        />
      )}
      <PageCircularProgress show={fetching} />
    </form>
  );
}
