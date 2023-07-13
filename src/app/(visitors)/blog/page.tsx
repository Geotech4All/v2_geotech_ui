"use client";
import PostList from "@/components/blog/PostList";
import PostsGrid from "@/components/blog/PostsGrid";
import { Page } from "@/components/common";
import { QueryAllPostsArgs, QueryPopularPostsArgs } from "@/graphql/generated";
import { ALL_POSTS, POPULAR_POSTS } from "@/graphql/requests/queries/Queries";
import { QueryReturs } from "@/graphql/types";
import { graphqlQuery } from "@/graphql/utils/fetch";

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <Page id="post_page" className="lg:px-32 flex flex-col gap-5">
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-lg">Popular</h2>
        <PostsGrid posts={posts.popular} />
      </section>
      <section className="flex flex-col mt-4">
        <h2 className="font-bold font-nunito mb-2 text-xl">Latest</h2>
        <PostList />
      </section>
    </Page>
  );
}

async function getBlogPosts() {
  const url = process.env.NEXT_PUBLIC_PROD_GRAPHQL_ENDPOINT ?? "";
  const popularPosts = await graphqlQuery<
    QueryPopularPostsArgs,
    { posts: typeof QueryReturs.popularPosts }
  >(url, POPULAR_POSTS, { first: 7 });
  const latestPosts = await graphqlQuery<
    QueryAllPostsArgs,
    { posts: typeof QueryReturs.allPosts }
  >(url, ALL_POSTS, { first: 20 });
  return {
    popular: popularPosts.data.posts,
    latest: latestPosts.data.posts,
  };
}
