"use client";
import { Maybe, UserType } from "@/graphql/generated";
import Avatar from "@mui/material/Avatar";

interface AuthorProps {
  user: Maybe<UserType> | undefined;
  dateTime?: string;
}

export default function Author(props: AuthorProps) {
  const { user, dateTime } = props;
  const date = dateTime ? new Date(dateTime) : null;

  const userName =
    user?.fullName && user?.fullName !== "None None" && user.fullName !== " "
      ? user?.fullName
      : "The Geotech Team";
  return (
    <div className="flex gap-2 items-center">
      <Avatar className="bg-black/10 border border-black/5" alt={userName} src={user?.profile?.image?.url} />
      <div className="flex flex-col">
        <p>{userName}</p>
        {date && (
          <time className="text-xs" dateTime={dateTime}>
            {date.toLocaleString("en-us", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </time>
        )}
      </div>
    </div>
  );
}
