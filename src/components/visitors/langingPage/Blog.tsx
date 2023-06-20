import { POSTS } from "@/graphql/requests/Queries";
import { Query, QueryAllPostsArgs } from "@/graphql/generated";
import { graphqlQuery } from "@/graphql/utils/fetch";
import Link from "next/link";
import LargePostCard from "@/components/blog/LargePostCard";
import MidPostCard from "@/components/blog/MidPostCard";
const prodURL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ?? "";
const Query: Query = {};
export default async function Blog() {
  const result = await graphqlQuery<
    QueryAllPostsArgs,
    { posts: typeof Query.allPosts }
  >(prodURL, POSTS, {
    first: 5,
  });

  const posts = result.data.posts;

  return (
    <section className="flex flex-col sm:px-12 lg:px-32">
      <Link
        className="flex flex-col mb-6 items-baseline font-medium md:text-3xl text-xl"
        href="/blog"
      >
        <span>Our blog</span>
        <h2 className="font-extrabold text-3xl md:text-5xl">
          The Geotech Journal
        </h2>
      </Link>
      <div className="flex flex-col gap-3 w-full">
        <LargePostCard post={posts?.edges[0]?.node} />
        <ul className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {posts?.edges.slice(1, 7).map((post) => (
            <MidPostCard key={post?.cursor} post={post?.node} />
          ))}
        </ul>
      </div>
    </section>
  );
}
