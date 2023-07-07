"use client";
import React from "react";
import { Tiptap } from "@/components/common/tiptap/form";
import { SelectTags, TagList, TagNodeDataType } from "@/components/tag";
import { Editor } from "@tiptap/core";
import {
  Maybe,
  OpportunityType,
  useCreateUpdateOpportunityMutation,
} from "@/graphql/generated";
import TextField from "@mui/material/TextField";
import { ErrorAlert, PageCircularProgress } from "@/components/common";
import {
  OrganizationDataType,
  OrganizationForm,
  SelectOrganization,
} from "@/components/organization";
import { Button, Divider, Modal } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface OpportunityFormProps {
  initialOpportunity?: Maybe<OpportunityType> | undefined;
}

export default function OpportunityForm(props: OpportunityFormProps) {
  const { initialOpportunity } = props;
  const [{ fetching, error }, saveOpportunity] =
    useCreateUpdateOpportunityMutation();
  const [showSelectOrg, setShowSelectOrg] = React.useState(false);

  const router = useRouter();

  const [org, setOrg] = React.useState<OrganizationDataType>();
  const [editor, setEditor] = React.useState<Editor>();
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const descRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [tags, setTags] = React.useState<TagNodeDataType[]>(() =>
    initialOpportunity?.tags ? [...initialOpportunity.tags] : []
  );
  const [showOrgForm, setShowOrgForm] = React.useState(false);

  const handleOrg = () => {
    if (org) {
      setShowOrgForm((curr) => !curr);
    } else {
      setShowSelectOrg((curr) => !curr);
    }
  };

  const handleSetOrg = (org: OrganizationDataType) => {
    setOrg(org);
    handleOrg();
  };

  const handleAddTag = (tag: TagNodeDataType) =>
    setTags((curr) => {
      const set = new Set([...curr, tag]);
      const arr = Array.from(set);
      return arr;
    });

  const handleRemoveTag = (tag: TagNodeDataType) => {
    setTags((curr) => curr.filter((item) => item?.title !== tag?.title));
  };

  const handleGetEditor = (editor: Editor) => {
    setEditor(editor);
  };

  const handleSaveOpportunity: React.FormEventHandler = (e) => {
    e.preventDefault();
    saveOpportunity({
      title: titleRef.current.value,
      tagIds: tags.map((tag) => tag?.tagId ?? ""),
      content: editor?.getHTML(),
      opportunityId: initialOpportunity?.opportunityId,
      organizationId: org?.organizationId,
      description: descRef.current.value,
    }).then((res) => {
      if (!res.error) {
        router.replace("/admin/opportunities");
      }
    });
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSaveOpportunity}
        className="flex items-center flex-col gap-9 w-full"
      >
        <ErrorAlert error={error} />
        <div className="max-w-4xl flex flex-col gap-9 w-full">
          <fieldset className="flex flex-col gap-5">
            <input
              ref={titleRef}
              placeholder="Title"
              defaultValue={initialOpportunity?.title}
              className="w-full md:text-5xl lg:text-7xl text-4xl font-extrabold outline-none"
            />
            <Divider />
          </fieldset>
          <fieldset className="flex flex-col md:flex-row gap-7">
            <div className="flex flex-1 flex-col gap-2">
              <legend className="text-black/60 text-sm italic mb-1">
                (Optional) Tags
              </legend>
              <TagList handleRemove={handleRemoveTag} tags={tags} />
              <SelectTags handleSelect={handleAddTag} />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <legend className="text-sm mb-1 italic text-black/50">
                (Optiona) Organization
              </legend>
              <div className="flex items-center text-xl font-semibold gap-2">
                <Image
                  width={50}
                  height={50}
                  className={`rounded-full aspect-square object-cover border ${
                    !org ? "opacity-30" : ""
                  }`}
                  alt={org ? org.logo?.description ?? "" : "/logo placeholder"}
                  src={org ? org.logo?.url ?? "" : "/image_placeholder.svg"}
                />
                <p className={`${!org ? "italic opacity-30" : ""}`}>
                  {org?.name ?? "Organization name"}
                </p>
              </div>
              <Button
                type="button"
                color={org ? "warning" : "success"}
                variant="outlined"
                className="w-fit self-end"
                onClick={handleOrg}
              >
                {org ? "Edit" : "Add"} Organization
              </Button>
            </div>
          </fieldset>
          <fieldset className="flex flex-col">
            <legend className="italic text-sm mb-1 text-black/50">
              Summary
            </legend>
            <TextField
              rows={3}
              multiline
              fullWidth
              inputRef={descRef}
              className="resize-none"
              placeholder="An opportunity at company"
            />
          </fieldset>
          <fieldset>
            <legend className="text-sm text-black/50 italic mb-1">
              Content
            </legend>
            <Tiptap
              placeholder={<OpportunityPlaceHolder />}
              initialContent={initialOpportunity?.content ?? ""}
              getEditor={handleGetEditor}
            />
          </fieldset>
          <Button
            type="submit"
            color="success"
            variant="contained"
            className="w-full bg-green-600 self-end"
          >
            Save
          </Button>
        </div>
      </form>
      <PageCircularProgress show={fetching} />
      <Modal
        className="flex flex-col p-2 items-center justify-center"
        onClose={handleOrg}
        open={showSelectOrg}
      >
        <SelectOrganization onSelectOrg={handleSetOrg} />
      </Modal>
      <Modal onClose={handleOrg} open={showOrgForm}>
        <OrganizationForm initialOrg={org ?? undefined} />
      </Modal>
    </React.Fragment>
  );
}

const OpportunityPlaceHolder = () => (
  <React.Fragment>
    <p>
      Opportunity details
    </p>
    <p>More information about this opportunity</p>
  </React.Fragment>
);
