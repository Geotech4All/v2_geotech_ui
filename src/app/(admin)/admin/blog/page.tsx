import { LinkButton, Page } from "@/components/common";

export default function PostAdmin() {
  return (
    <Page>
      Post Admin
      <LinkButton href="/admin/blog/new">
        New Post
      </LinkButton>
    </Page>
  );
}
