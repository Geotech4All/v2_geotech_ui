import moment from "moment";

interface RelativeTimeProps {
  dateTime: string;
  className?: string;
}

export default function RelativeTime(props: RelativeTimeProps) {
  const { dateTime, className } = props;
  const relativeTime = moment(dateTime).fromNow();
  
  return (
    <time className={className} dateTime={dateTime}>
      {relativeTime}
    </time>
  )
}
