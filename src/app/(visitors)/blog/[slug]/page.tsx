import React from "react";
import { HTMLRederrer, Page } from "@/components/common";
import Author from "@/components/common/users/Author";
import {
  MutationIncreasePostViewCountArgs,
  QueryGetPostByIdArgs,
} from "@/graphql/generated";
import { POST_DETAIL } from "@/graphql/requests/queries/Queries";
import { MutationReturns, QueryReturs } from "@/graphql/types";
import { graphqlQuery } from "@/graphql/utils/fetch";
import { Metadata } from "next";
import PostReadLength from "@/components/blog/PostReadLength";
import Image from "next/image";
import { UPDATE_POST_VIEWS } from "@/graphql/requests/mutations/VisitorMutations";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;
  const postId = params.slug.split("-")[0];

  const post = await getPostDetails(postId);
  const fullName = post?.author.fullName;
  const authorName = fullName !== "None None" ? fullName : "The Geotech Team";
  return {
    title: post?.title,
    description: post?.abstract,
    category: "geology",
    openGraph: {
      type: "article",
      title: post?.title ?? "",
      description: post?.abstract ?? "",
      url: `https://www.geotech4all.com/blog/${params.slug}`,
      publishedTime: post?.lastUpdated ?? "",
      authors: [authorName ?? ""],
      images: [
        {
          url: post?.coverPhoto?.url ?? "",
          alt: post?.coverPhoto?.description ?? "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title ?? "",
      images: [post?.coverPhoto?.url ?? ""],
      description: post?.abstract ?? "",
      creator: "@creator",
      site: "@site",
    },
    viewport: {
      width: "device-width",
      initialScale: 1,
    },
  };
}

export default async function PostDetails(props: PageProps) {
  const { params } = props;

  const postId = params.slug.split("-")[0];
  const post = await getPostDetails(postId);

  return (
    <Page className="flex flex-col pt-8 items-center">
      <article className="max-w-3xl">
        <header className="flex flex-col gap-7">
          <h1 className="font-extrabold text-4xl lg:text-5xl">{post?.title}</h1>
          <div className="flex relative gap-2">
            <Author dateTime={post?.lastUpdated} user={post?.author} />
            <PostReadLength readLength={post?.readLength} />
          </div>
        </header>
        <figure className="w-full mt-12">
          <Image
            width={700}
            height={400}
            className="w-full"
            alt={post?.coverPhoto?.description ?? ""}
            src={post?.coverPhoto?.url ?? ""}
          />
        </figure>
        <HTMLRederrer
          className="mt-8 flex flex-col gap-4 font-medium md:text-lg"
          html={post?.body ?? ""}
        />
      </article>
    </Page>
  );
}

async function getPostDetails(postId: string) {
  const url = process.env.NEXT_PUBLIC_PROD_GRAPHQL_ENDPOINT ?? "";
  type PostQueryReturn = typeof QueryReturs.getPostById;
  type IncreaseViewsReturns = typeof MutationReturns.increasePostViewCount;

  graphqlQuery<
    MutationIncreasePostViewCountArgs,
    { increasePostViewCount: IncreaseViewsReturns }
  >(url, UPDATE_POST_VIEWS, { postId });

  const res = await graphqlQuery<
    QueryGetPostByIdArgs,
    { post: PostQueryReturn }
  >(url, POST_DETAIL, { postId });

  return res.data.post;
}
