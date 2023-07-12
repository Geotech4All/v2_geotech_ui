import { QueryGetPostByIdArgs } from "@/graphql/generated";
import { POST_DETAIL } from "@/graphql/requests/queries/Queries";
import { QueryReturs } from "@/graphql/types";
import { graphqlQuery } from "@/graphql/utils/fetch";


export async function getPostDetails(postId: string) {
  const url = process.env.NEXT_PUBLIC_PROD_GRAPHQL_ENDPOINT ?? "";
  type PostQueryReturn = typeof QueryReturs.getPostById;

  const res = await graphqlQuery<
    QueryGetPostByIdArgs,
    { post: PostQueryReturn }
  >(url, POST_DETAIL, { postId });

  return res.data.post;
}
