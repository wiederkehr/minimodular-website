import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  const folders = fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
  return folders;
}

export function getPostBySlug(slug, fields = []) {
  const path = join(postsDirectory, `${slug}/${slug}.mdx`);
  const markdown = fs.readFileSync(path, "utf8");
  const { data, content } = matter(markdown);

  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}

export function getPublishedPosts(fields = []) {
  const posts = getAllPosts(fields.concat("draft"));
  return posts.filter((post) => !post.draft);
}
