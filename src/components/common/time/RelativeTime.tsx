import moment from "moment";
import { twMerge } from "tailwind-merge";

interface RelativeTimeProps {
  dateTime: string;
  className?: string;
}

export default function RelativeTime(props: RelativeTimeProps) {
  const { dateTime, className } = props;
  const relativeTime = moment(dateTime).fromNow();

  return (
    <time
      className={twMerge("whitespace-nowrap", className)}
      dateTime={dateTime}
    >
      {relativeTime}
    </time>
  );
}
