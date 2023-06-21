import { POPULAR_POSTS } from "@/graphql/requests/Queries";
import { Query, QueryAllPostsArgs } from "@/graphql/generated";
import { graphqlQuery } from "@/graphql/utils/fetch";
import Link from "next/link";
import LargePostCard from "@/components/blog/LargePostCard";
import MidPostCard from "@/components/blog/MidPostCard";
import { BsLink45Deg, BsArrowRightShort } from "react-icons/bs";

const prodURL = "https://web-production-dff3.up.railway.app/graphql";
const Query: Query = {};

export default async function Blog() {
  const result = await graphqlQuery<
    QueryAllPostsArgs,
    { posts: typeof Query.allPosts }
  >(prodURL, POPULAR_POSTS, {
    first: 7,
  });

  const posts = result.data.posts;

  return (
    <section className="flex flex-col sm:px-12 lg:px-32">
      <Link
        className="flex flex-col mb-6 items-baseline group font-medium md:text-3xl text-xl"
        href="/blog"
      >
        <span className="flex items-center">
          <span>Our blog</span>
          <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition duration-300"><BsLink45Deg /></span>
        </span>
        <h2 className="font-extrabold text-3xl md:text-5xl">
          The Geotech Journal
        </h2>
      </Link>
      <div className="flex flex-col gap-3 w-full">
        <LargePostCard post={posts?.edges[0]?.node} />
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts?.edges.slice(1, 7).map((post) => (
            <MidPostCard key={post?.cursor} post={post?.node} />
          ))}
        </ul>
        <Link className="flex items-center group relative text-lg self-end" href="/blog">
          <span className="pr-5">See more</span>
          <span className="group-hover:text-4xl group-hover:-right-4 absolute transition-all right-0"><BsArrowRightShort /></span>
        </Link>
      </div>
    </section>
  );
}
