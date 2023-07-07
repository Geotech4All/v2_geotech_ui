import { QueryPopularPostsArgs } from "@/graphql/generated";
import { POPULAR_POSTS } from "@/graphql/requests/queries/Queries";
import { graphqlQuery } from "@/graphql/utils/fetch";
import { QueryReturs } from "@/graphql/types";
import PostTrophy from "./PostTrophy";

export default async function Trophies() {
  const trophies = await getTrophies();
  const post = trophies.post;

  return (
    <div>
      <p className="font-bold text-black/50 mb-2">Trophies</p>
      <PostTrophy post={post}/>
    </div>
  );
}

async function getTrophies() {
  const url = process.env.NEXT_PUBLIC_PROD_GRAPHQL_ENDPOINT ?? "";
  type PostsReturn = typeof QueryReturs.popularPosts;

  const posts = await graphqlQuery<
    QueryPopularPostsArgs,
    { posts: PostsReturn }
  >(
    url,
    POPULAR_POSTS,
    { first: 1 },
  );

  return {
    post: posts.data.posts?.edges[0]?.node,
  };
}
