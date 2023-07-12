import PostForm from "@/components/blog/admin/PostForm";
import { Page } from "@/components/common";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "New Post | Geotech",
    description: "Create a new post",
  };
}
export default function NewPost() {
  return (
    <Page>
      <PostForm />
    </Page>
  );
}
