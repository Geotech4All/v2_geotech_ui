import { Search } from "@/components";
import { AdminPostList } from "@/components/blog";
import { LinkButton, Page } from "@/components/common";

export default function PostAdmin() {
  return (
    <Page>
      <div className="p-2 flex flex-col gap-2">
        <Search />
        <AdminPostList />
      </div>
      <LinkButton href="/admin/blog/new">
        New Post
      </LinkButton>
    </Page>
  );
}
