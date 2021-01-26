/** @jsx jsx */
import config from "../site.config"
import { jsx, Box } from "theme-ui";
import Layout from "../components/Layout";
import Introduction from "../components/Introduction";
import Notification from "../components/Notification";
import PostList from "../components/PostList";
import PostListItem from "../components/PostListItem";
import { getAllPosts } from '../api';

const Home = ({posts}) => (
  <Layout>
    <Introduction
      title={config.title + " Gear Lab"}
      description={config.description}
    />
    <Box sx={{my: 5}}>
      <Notification />
    </Box>
    <Box sx={{ my: 5 }}>
      {!posts ? null : (
      <PostList>
        {posts.map((post, idx) => (
          <PostListItem
            key={idx}
            href={`/posts/${post.slug}`}
            date={post.date}>
            {post.title}
          </PostListItem>
        ))}
      </PostList>
      )}
    </Box>
  </Layout>
)

export default Home;

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "draft"])
  return {
    props: { posts: allPosts }
  }
}