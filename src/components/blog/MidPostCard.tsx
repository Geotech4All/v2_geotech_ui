import { Maybe, PostType } from "@/graphql/generated";
import Image from "next/image";
import Link from "next/link";
import Author from "../common/users/Author";

interface PostCardProps {
  post: Maybe<PostType> | undefined;
  admin?: boolean;
}

export default function MidPostCard(props: PostCardProps) {
  const { admin, post } = props;

  const title = post?.title.split(" ").join("-");
  const slug = `/blog/${post?.postId}-${title}`;
  const url = `${admin ? "/admin" : ""}${slug}`;

  const readMinutes = parseFloat(post?.readLength?.toString() ?? "") / 60;
  const readLength = parseInt(readMinutes.toString());
  return (
    <Link className="h-full" href={url}>
      <article className={`
        flex flex-col gap-3 h-full hover:shadow-md hover:shadow-black/20 hover:rounded-lg
        transition-all duration-300 shadow shadow-black/5 rounded
        overflow-hidden
      `}>
        <div className="rounded flex-1 overflow-hidden">
          <Image
            width={400}
            height={225}
            className="w-full object-cover"
            alt={post?.coverPhoto?.description ?? "cover"}
            src={post?.coverPhoto?.url ?? "/reading_geotech.svg"}
          />
        </div>
        <div className="flex flex-col flex-1 justify-between p-2">
          <h3 className="font-bold text-2xl line-clamp-2">{post?.title}</h3>
          <div className="flex flex-col relative gap-3">
            <p className="line-clamp-2">{post?.abstract}</p>
            <Author user={post?.author} />
            <em className="absolute bottom-2 right-1">{readLength} min read</em>
          </div>
        </div>
      </article>
    </Link>
  );
}
