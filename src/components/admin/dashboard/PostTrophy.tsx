import { Maybe, PostType } from "@/graphql/generated";
import { FaTrophy } from "react-icons/fa";
import Author from "@/components/common/users/Author";

interface PostTrophyProps {
  post: Maybe<PostType> | undefined;
}

export default function PostTrophy(props: PostTrophyProps) {
  const { post } = props;
  return (
    <div
      className={`
      rounded-lg p-3 bg-black/10 flex flex-col
      justify-between gap-1 shadow-lg max-w-[20rem] aspect-video
    `}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 p-2 bg-white aspect-square rounded-full">
            {<FaTrophy size={25} />}
          </span>
          <span className="font-montserrat font-medium text-xl">Top post</span>
        </div>
        <p className="line-clamp-1 font-bold text-lg">{post?.title}</p>
        <strong className="self-end text-2xl font-bold">
          <span className="text-4xl">{post?.views}</span>
          <span>reads</span>
        </strong>
      </div>
      <div className="justify-end">
        <Author user={post?.author} dateTime={post?.lastUpdated} />
      </div>
    </div>
  );
}
