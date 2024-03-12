import { readdir } from 'fs/promises';
export interface Post {
  slug: string;
  title: string;
  publishDate: string;
}

export const postsPerPage = 4 as const;
export const allPosts = [] as const;

export async function getPosts(): Promise<Post[]> {
  // retrieve slugs form post routes
  const slugs = (
    await readdir('./src/app/(posts)', { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  // retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`./app/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  // sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

export async function getPaginatedPosts({
  page,
  limit,
}: {
  page: number;
  limit: number;
}): Promise<{ posts: Post[]; total: number }> {
  const allPosts = await getPosts();

  // get a subset of posts based on page and limit
  const paginatedPosts = allPosts.slice((page - 1) * limit, page * limit);

  return {
    posts: paginatedPosts,
    total: allPosts.length,
  };
}
