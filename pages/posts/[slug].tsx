/** @jsx jsx */
import config from "../../site.config"
import { jsx } from "theme-ui";
import Layout from "../../components/Layout";
import Markdown from "../../components/Markdown";
import Hero from "../../components/Hero";
import { getPostBySlug, getAllPosts } from "../../api";


const Post = ({post}) => (
  <Layout
    title={config.title + " | " + post.title}
    description={post.description}
  >
    <article>
      <Hero
        title={post.title}
        description={post.description}
      />
      <Markdown
        content={post.content}
      />
    </article>
</Layout>
)

export default Post

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "description",
    "date",
    "content",
  ])
  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}