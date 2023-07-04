"use client";
import Avatar from "@mui/material/Avatar";
import { UserDataType } from "./types";
import { DateTime } from "../time";

interface AuthorProps {
  user: UserDataType | undefined;
  dateTime?: string;
}

export default function Author(props: AuthorProps) {
  const { user, dateTime } = props;

  const userName =
    user?.fullName && user?.fullName !== "None None" && user.fullName !== " "
      ? user?.fullName
      : "The Geotech Team";
  return (
    <div className="flex gap-2 items-center">
      <Avatar
        className="bg-black/10 border border-black/5"
        alt={userName}
        src={user?.profile?.image?.url}
      />
      <div className="flex flex-col">
        <p>{userName}</p>
        <DateTime dateTime={dateTime} />
      </div>
    </div>
  );
}
