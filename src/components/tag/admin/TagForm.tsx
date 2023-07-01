"use client";
import { TransitionAlert } from "@/components/common";
import PageCircularProgress from "@/components/common/loading/PageCicularProgress";
import { TagType, useTagCreateUpdateMutation } from "@/graphql/generated";
import Button from "@mui/material/Button";
import React from "react";
import { TagDataType } from "../types";


interface TagFormProps {
  initialValue?: TagType;
  onSuccess?: (tag: TagDataType) => void;
}

export default function TagForm(props: TagFormProps) {
  const { initialValue, onSuccess } = props;
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const [{ fetching, error }, saveTag] = useTagCreateUpdateMutation()

  const handleSaveTag: React.FormEventHandler = (e) => {
    e.preventDefault();
    saveTag({
      tagId: initialValue?.tagId,
      title: titleRef.current.value,
      description: descRef.current.value,
    }).then(res => {
      if (res.data?.createUpdateTag?.success && onSuccess) {
        onSuccess(res.data.createUpdateTag.tag)
      }
    })
  }

  return (
    <form onSubmit={handleSaveTag} className="flex flex-col gap-2 max-w-2xl p-4 rounded-md w-full bg-white">
      <fieldset className="flex flex-col gap-3">
        <legend className="font-medium text-xl mb-3">New Tag</legend>
        <input
          ref={titleRef}
          placeholder="Name"
          defaultValue={initialValue?.title}
          className={`
            outline-none bg-transparent shadow focus:shadow-lg
            focus:shadow-black/20 transition p-2 border rounded
          `}
        />
        <textarea
          ref={descRef}
          placeholder="(Optional) Description"
          defaultValue={initialValue?.description ?? undefined}
          className={`
            border rounded outline-none p-2 bg-transparent resize-none shadow
            focus:shadow-lg focus:shadow-black/20 transition
          `}
        />
      </fieldset>
      <Button type="submit" className="bg-green-600" color="success" variant="contained">Save</Button>
      <PageCircularProgress show={fetching}/>
      { error && <TransitionAlert duration={1000} variant="error">{error.message}</TransitionAlert> }
    </form>
  );
}
