import React from "react";

interface DateTimeProps {
  dateTime?: string;
}

export default function DateTime(props: DateTimeProps) {
  const { dateTime } = props;
  const date = dateTime ? new Date(dateTime) : null;
  return (
    <React.Fragment>
      {date && (
        <time className="text-xs" dateTime={dateTime}>
          {date.toLocaleString("en-us", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
      )}
    </React.Fragment>
  );
}
