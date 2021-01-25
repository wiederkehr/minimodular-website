/** @jsx jsx */
import config from "../../site.config"
import { jsx } from "theme-ui";
import Meta from "../../components/Meta";
import Layout from "../../components/Layout";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import { getPostBySlug, getAllPosts } from "../../api";


const Post = ({post}) => (
  <Layout>
    <Meta
      title={config.title + " | " + post.title}
      description={post.description}
    />
    <article sx={{ my: 5 }}>
      <PostHeader
        title={post.title}
        description={post.description}
      />
      <PostBody
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