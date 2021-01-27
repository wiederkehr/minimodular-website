/** @jsx jsx */
import site from "../../site.config"
import { jsx } from "theme-ui";
import Page from "../../components/Page";
import Markdown from "../../components/Markdown";
import Introduction from "../../components/Introduction";
import { getPostBySlug, getAllPosts } from "../../api";


const Post = ({post}) => (
  <Page
    title={site.title + " | " + post.title}
    description={post.description}
  >
    <article>
      <Introduction
        title={post.title}
        description={post.description}
      />
      <Markdown
        content={post.content}
      />
    </article>
</Page>
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