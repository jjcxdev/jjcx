import { Posts } from "@/components/posts";
import { getPaginatedPosts } from "@/posts";
import { Pagination } from "@/components/pagination";

export default async function BlogList() {
  const fullPagePostList = 50;

  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: fullPagePostList,
  });

  return (
    <main className="flex flex-col max-w-5xl w-full">
      <Posts posts={posts} />

      {/* <Pagination baseUrl="/page" page={1} perPage={postsPerPage} total={total} />
       */}
      <div className="flex justify-end"></div>
    </main>
  );
}
