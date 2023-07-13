import { Maybe, PostType } from "@/graphql/generated";
import Image from "next/image";
import Link from "next/link";
import { Author } from "@/components/common";
import { PostReadLength } from "@/components/blog";

interface PostCardProps {
  admin?: boolean;
  post: Maybe<PostType> | undefined;
}

export default function LargePostCard(props: PostCardProps) {
  const { admin, post } = props;

  const title = post?.title.split(" ").join("-");
  const slug = `/blog/${post?.postId}-${title}`;
  const url = `${admin ? "/admin" : ""}${slug}`;

  return (
    <Link className="" href={url}>
      <article
        className={`
        shadow shadow-black/5 hover:shadow-black/10 transition-all duration-300 hover:shadow-lg
        grid grid-cols-1 items-end md:grid-cols-2 gap-2 hover:rounded-xl overflow-hidden`}
      >
        <div className="flex-[1.4] rounded overflow-hidden">
          <Image
            width={700}
            height={395}
            className="w-full aspect-video object-cover"
            alt={post?.coverPhoto?.description ?? "cover"}
            src={post?.coverPhoto?.url ?? "/reading-geotech.svg"}
          />
        </div>
        <div className="flex-1 flex flex-col p-3 gap-5">
          <h3 className="font-bold line-clamp-2 xl:line-clamp-3 text-4xl">{post?.title}</h3>
          <div className="flex relative flex-col gap-3">
            <p className="line-clamp-2 xl:line-clamp-3">{post?.abstract}</p>
            <Author user={post?.author} dateTime={post?.lastUpdated} />
            <PostReadLength readLength={post?.readLength} />
          </div>
        </div>
      </article>
    </Link>
  );
}
