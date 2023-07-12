import React from "react";
import { HTMLRederrer, Page } from "@/components/common";
import Author from "@/components/common/users/Author";
import { Metadata } from "next";
import PostReadLength from "@/components/blog/PostReadLength";
import Image from "next/image";
import { getPostDetails, UpdatedPostViews } from "@/components/blog";

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
      <UpdatedPostViews postId={post?.postId ?? ""} />
    </Page>
  );
}
