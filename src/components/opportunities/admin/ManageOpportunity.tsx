"use client";
import { OpportunityEdgeDataType } from "../types";
import Image from "next/image";
import Button from "@mui/material/Button";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SlOptionsVertical } from "react-icons/sl";
import { useAppSelector } from "@/redux/hooks";
import { selectAdmin } from "@/redux/slices/adminSlice";
import { Modal } from "@mui/material";

interface ManageOpportuntiyProps {
  opportunity: OpportunityEdgeDataType;
}

export default function ManageOpportuntiy(props: ManageOpportuntiyProps) {
  const { opportunity } = props;
  const isMediumScreen = useMediaQuery("(min-width: 768px)");

  return (
    <li
      className="flex bg-white opportunitys-center justify-between p-0.5 shadow rounded"
      key={opportunity?.cursor}
    >
      <div className="flex items-center">
        <Image
          width={60}
          height={60}
          className="aspect-square object-cover rounded-full"
          alt={opportunity?.node?.organization?.logo?.description ??
            "logo placeholder"}
          src={opportunity?.node?.organization?.logo?.url ??
            "/image_placeholder.svg"}
        />
        <h4 className="font-medium text-lg">{opportunity?.node?.title}</h4>
      </div>
      {isMediumScreen
        ? <ManageOptions opportunity={opportunity} />
        : <MobileManageOptions opportunity={opportunity} />}
    </li>
  );
}

function ManageOptions(props: ManageOpportuntiyProps) {
  const { opportunity } = props;
  const [showDelete, setShowDelete] = React.useState(false);
  const admin = useAppSelector(selectAdmin);
  const title = opportunity?.node?.title.split(" ").join("-");
  const slug = `${opportunity?.node?.opportunityId}-${title}`;
  const url = `/admin/opportunities/edit/${slug}`;
  const canDeleteOpportunities = admin.staff?.staff?.canDeleteOpportunities;
  
  const toggleDelete = () => setShowDelete(curr => !curr);
  
  return (
    <React.Fragment>
      <div className="flex flex-col md:flex-row p-1 rounded items-center gap-3">
        <Link
          className={`
            text-yellow-400 flex-1 flex items-center gap-3 hover:bg-yellow-400/10
            p-0.5 rounded w-full px-3 md:px-0.5
          `}
          href={url}
        >
          <AiFillEdit />
          <span>Edit</span>
        </Link>
        <Button
          onClick={toggleDelete}
          disabled={!canDeleteOpportunities}
          className="flex-1" color="error">
          <AiFillDelete size={25} />
          <span>Delete</span>
        </Button>
      </div>
      <Modal onClose={toggleDelete} className="flex items-center justify-center" open={showDelete}>
        <div className="bg-white flex flex-col gap-3 items-center p-3 rounded-md">
          <div className="flex flex-col gap-1 items-center">
            <p>
              Are you sure you want to delete this opportunity?
            </p>
            <h2 className="font-medium text-lg">{opportunity?.node?.title}</h2>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={toggleDelete} color="warning" variant="outlined" type="button">
              No Cancel!
            </Button>
            <Button onClick={toggleDelete} variant="contained" color="error" type="button">
              Yes Delete!
            </Button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

function MobileManageOptions(props: ManageOpportuntiyProps) {
  const { opportunity } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );


  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "opportunity-manage-popover" : undefined;
  return (
    <React.Fragment>
      <IconButton onClick={handleClick} type="button" aria-label="options">
        <SlOptionsVertical />
      </IconButton>
      <Popover
        open={open}
        id={id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <ManageOptions opportunity={opportunity} />
      </Popover>
    </React.Fragment>
  );
}
