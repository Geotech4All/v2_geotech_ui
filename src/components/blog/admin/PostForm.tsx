"use client";
import React from "react";
import { Tiptap } from "@/components/common/tiptap/form";
import { Editor } from "@tiptap/core";
import {
  Maybe,
  PostType,
  useCreateUpdatePostMutation,
} from "@/graphql/generated";
import { useAppSelector } from "@/redux/hooks";
import { selectAdmin } from "@/redux/slices/adminSlice";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import { ImagePicker } from "@/components/images";
import { ImageDataType } from "@/components/images/admin/ImagePickerItem";
import Image from "next/image";
import { PageCircularProgress } from "@/components/common";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/material";

interface PostFormProps {
  initialPost?: Maybe<PostType> | undefined;
}
export default function PostForm(props: PostFormProps) {
  const { initialPost } = props;
  const admin = useAppSelector(selectAdmin);
  const staff = admin.staff?.staff;
  const router = useRouter();
  const getEditor = (editor: Editor) => setEditor(editor);
  const [showImagePicker, setShowImagePicker] = React.useState(false);
  const toggleImagePicker = () => setShowImagePicker((curr) => !curr);
  const handleSelectImage = (image: ImageDataType) => {
    setCoverPhoto(image);
    toggleImagePicker();
  };

  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [coverPhoto, setCoverPhoto] = React.useState<ImageDataType>(
    initialPost?.coverPhoto,
  );
  const [editor, setEditor] = React.useState<Editor>();
  const [{ fetching, error }, savePost] = useCreateUpdatePostMutation();
  const [errors, setErrors] = React.useState(error);

  const [success, setSuccess] = React.useState(false);

  const handleSavePost: React.FormEventHandler = (e) => {
    e.preventDefault();
    savePost({
      postId: initialPost?.postId,
      body: editor?.getHTML() ?? "",
      title: titleRef.current.value,
      abstract: descRef.current.value,
      coverPhotoId: coverPhoto?.imageId,
    }).then((res) => {
      if (res.data?.createUpdatePost?.success) {
        setSuccess(res.data.createUpdatePost.success);
      } else if (res.error) {
        setErrors(res.error);
      }
    });
  };
  const enabled = Boolean(staff?.canCreatePost || staff?.canAlterPost);

  const handleSuccess = () => router.replace("/admin/blog");
  const clearErrors = () => setErrors(undefined);

  return (
    <React.Fragment>
      <form
        className="flex flex-col gap-5 p-2 items-center"
        onSubmit={handleSavePost}
      >
        <fieldset
          disabled={!enabled}
          className={`
          flex flex-col gap-4 max-w-4xl w-full disabled:opacity-50
          ${!enabled ? "pointer-events-none" : ""} 
        `}
        >
          <input
            required
            title="Title"
            ref={titleRef}
            placeholder="Title"
            defaultValue={initialPost?.title}
            className={`
              text-lg outline-none sm:text-2xl focus:shadow-xl transition-all
              md:p-2 rounded lg:text-6xl md:font-extrabold font-bold
              focus:shadow-black/5 md:px-4 px-2 p-1
            `}
          />
          <TextField
            rows={5}
            required
            multiline
            fullWidth
            title="Summary"
            label="Summary"
            inputRef={descRef}
            defaultValue={initialPost?.abstract}
            className="text-sm md:text-base"
            placeholder="A captivating summary of this post."
          />
          <button
            onClick={toggleImagePicker}
            type="button"
            className={`
              font-medium
              flex gap-3 relative pr-4 mt-4 items-center ml-2
              transition-all max-h-8 py-3 overflow-y-visible
              hover:shadow-xl shadow border w-fit rounded outline-none
              ${coverPhoto ? "text-yellow-500" : "text-green-500"}
            `}
          >
            <Image
              width={70}
              height={70}
              alt="image icon"
              src="/image_placeholder.svg"
              className="border rounded-full absolute -left-2 aspect-square"
            />
            <span className="flex items-center pl-16 gap-1">
              <span>
                {coverPhoto ? "Edit" : "Add"}
              </span>
              <span>Cover photo</span>
            </span>
          </button>
          {coverPhoto && (
            <Image
              width={800}
              height={450}
              src={coverPhoto.url}
              alt={coverPhoto.description ?? ""}
              title={coverPhoto.description ?? "Cover photo"}
              className="aspect-video rounded-md"
            />
          )}
          <div>
            <Tiptap
              getEditor={getEditor}
              placeholder={<PostPlaceholder />}
              initialContent={initialPost?.body}
            />
          </div>
          <Button
            className="bg-green-500"
            type="submit"
            color="success"
            variant="contained"
          >
            Save
          </Button>
        </fieldset>
      </form>
      <Modal
        className="flex p-3 items-center justify-center"
        onClose={toggleImagePicker}
        open={showImagePicker}
      >
        <ImagePicker onSelectImage={handleSelectImage} />
      </Modal>
      <PageCircularProgress show={fetching} />
      <Snackbar onClose={handleSuccess} open={success} autoHideDuration={7000}>
        <Alert
          onClose={handleSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post Save!
        </Alert>
      </Snackbar>
      <Snackbar
        onClose={clearErrors}
        open={Boolean(errors)}
        autoHideDuration={7000}
      >
        <Alert severity="error" sx={{ width: "100%" }} onClose={clearErrors}>
          {errors?.message}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}

function PostPlaceholder() {
  return (
    <div>
      <p>New post contents</p>
    </div>
  );
}
