import { POPULAR_POSTS } from "@/graphql/requests/queries/Queries";
import { QueryAllPostsArgs } from "@/graphql/generated";
import { graphqlQuery } from "@/graphql/utils/fetch";
import Link from "next/link";
import { BsArrowRightShort, BsLink45Deg } from "react-icons/bs";
import { QueryReturs } from "@/graphql/types";
import PostsGrid from "@/components/blog/PostsGrid";

export default async function Blog() {
  const result = await fetchPopularPosts();

  const posts = result.data.posts;

  return (
    <section className="flex flex-col sm:px-12 lg:px-32">
      <Link
        className="flex flex-col mb-6 items-baseline group font-medium md:text-3xl text-xl"
        href="/blog"
      >
        <span className="flex items-center">
          <span>Our blog</span>
          <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition duration-300">
            <BsLink45Deg />
          </span>
        </span>
        <h2 className="font-extrabold text-3xl md:text-5xl">
          The Geotech Journal
        </h2>
      </Link>
      <div className="flex flex-col gap-3 w-full">
        <PostsGrid posts={posts} />
        <Link
          className="flex items-center group relative text-lg self-end"
          href="/blog"
        >
          <span className="pr-5">See more</span>
          <span className="group-hover:text-4xl group-hover:-right-4 absolute transition-all right-0">
            <BsArrowRightShort />
          </span>
        </Link>
      </div>
    </section>
  );
}

async function fetchPopularPosts() {
  const prodURL = process.env.NEXT_PUBLIC_PROD_GRAPHQL_ENDPOINT ?? "";

  return graphqlQuery<
    QueryAllPostsArgs,
    { posts: typeof QueryReturs.allPosts }
  >(prodURL, POPULAR_POSTS, {
    first: 7,
  });
}
