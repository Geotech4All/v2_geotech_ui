import { Maybe } from "@/graphql/generated";

interface PostReadLengthProps {
  readLength: Maybe<number> | undefined;
}

export default function PostReadLength(props: PostReadLengthProps) {
  const { readLength } = props;

  const readMinutes = parseFloat(readLength?.toString() ?? "") / 60;
  const computed = parseInt(readMinutes.toString());

  return <em className="absolute bottom-2 right-1">{computed} min read</em>;
}
