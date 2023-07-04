import React from "react";
import { BsCalendar2Event } from "react-icons/bs";

interface DateTimeProps {
  dateTime?: string;
  icon?: boolean;
  size?: "lg" | "sm" | "md";
}

export default function DateTime(props: DateTimeProps) {
  const { dateTime, icon, size = "sm" } = props;
  const date = dateTime ? new Date(dateTime) : null;
  const textSize = size === "lg"
    ? "text-lg"
    : size === "md"
    ? "text-base"
    : "text-xs";
  return (
    <React.Fragment>
      {date && (
        <time
          className={`flex items-center gap-2 ${textSize} font-bold`}
          dateTime={dateTime}
        >
          <span>
            {date.toLocaleString("en-us", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </span>
          {icon && (
            <span className="bg-black/10 aspect-square p-2 rounded-full">
              <BsCalendar2Event />
            </span>
          )}
        </time>
      )}
    </React.Fragment>
  );
}
