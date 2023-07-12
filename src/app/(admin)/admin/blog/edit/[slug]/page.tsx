import { getPostDetails } from "@/components/blog";
import PostForm from "@/components/blog/admin/PostForm";
import { Page } from "@/components/common";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;
  const { slug } = params;
  const postId = slug.split("-")[0];
  const post = await getPostDetails(postId);

  return {
    title: `Edit - ${post?.title}`,
    description: `Edit Post - ${post?.title}`,
  };
}

export default async function EditPost(props: PageProps) {
  const { params } = props;
  const { slug } = params;
  const postId = slug.split("-")[0];
  const post = await getPostDetails(postId);
  return (
    <Page>
      <PostForm initialPost={post} />
    </Page>
  );
}
