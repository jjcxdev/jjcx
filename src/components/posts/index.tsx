import { type Post } from "@/posts";
import Link from "next/link";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol>
      {posts.map(({ slug, title, publishDate }) => (
        <Link key={slug} className="hover:text-yellow-400" href={`/${slug}`}>
          <li
            className="flex border border-coal justify-between w-full hover:bg-secondary hover:border-accent hover:rounded-md items-top px-4 py-2 hover:border hover:text-yellow-400"

          >
            <h2 className="uppercase">{title}</h2>
            <p className="text-sm text-lightcoal">
              {new Date(publishDate).toLocaleDateString()}{" "}
            </p>
          </li>
        </Link>
      ))}
    </ol>
  );
}
