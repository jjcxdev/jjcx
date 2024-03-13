import { Posts } from "@/components/posts";
import { getPaginatedPosts, postsPerPage } from "@/posts";
import { Pagination } from "@/components/pagination";
import SecondaryButton from "../buttons/SecondaryButton";

export default async function BlogList() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <main className="flex font-normal flex-col w-full">
      <h1 className="text-xs font-normal underline pl-4 pb-4 flex-row uppercase justify-start">
        Blog
      </h1>
      <Posts posts={posts} />

      {/* <Pagination baseUrl="/page" page={1} perPage={postsPerPage} total={total} />
       */}
      <div className="flex justify-end">
        <SecondaryButton text="View All" href="../blog/" />
      </div>
    </main>
  );
}
