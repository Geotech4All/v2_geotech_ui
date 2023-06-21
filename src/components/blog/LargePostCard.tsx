import { Maybe, PostType } from "@/graphql/generated";
import Image from "next/image";
import Link from "next/link";
import Author from "../common/users/Author";

interface PostCardProps {
  admin?: boolean;
  post: Maybe<PostType> | undefined;
}

export default function LargePostCard(props: PostCardProps) {
  const { admin, post } = props;

  const title = post?.title.split(" ").join("-");
  const slug = `/blog/${post?.postId}-${title}`;
  const url = `${admin ? "/admin" : ""}${slug}`;

  const readMinutes = parseFloat(post?.readLength?.toString() ?? "") / 60;
  const readLength = parseInt(readMinutes.toString());

  return (
    <Link className="" href={url}>
      <article
        className={`
        shadow shadow-black/5 hover:shadow-black/10 transition-all duration-300 hover:shadow-lg
        grid grid-cols-1 items-end lg:grid-cols-2 gap-2 hover:rounded-xl overflow-hidden`}
      >
        <div className="flex-[1.4] rounded overflow-hidden">
          <Image
            width={700}
            height={395}
            className="w-full object-cover"
            alt={post?.coverPhoto?.description ?? "cover"}
            src={post?.coverPhoto?.url ?? "/reading-geotech.svg"}
          />
        </div>
        <div className="flex-1 flex flex-col p-3 gap-5">
          <h3 className="font-bold line-clamp-3 text-4xl">{post?.title}</h3>
          <div className="flex relative flex-col gap-3">
            <p className="line-clamp-3">{post?.abstract}</p>
            <Author user={post?.author} dateTime={post?.lastUpdated} />
            <em className="absolute bottom-2 right-1">{readLength} min read</em>
          </div>
        </div>
      </article>
    </Link>
  );
}
