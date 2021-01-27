/** @jsx jsx */
import site from "../site.config"
import { jsx, Box } from "theme-ui";
import Page from "../components/Page";
import Introduction from "../components/Introduction";
import Notification from "../components/Notification";
import PostList from "../components/PostList";
import PostListItem from "../components/PostListItem";
import { getAllPosts, getPublishedPosts } from '../api';

const Home = ({posts}) => (
  <Page
    title={site.title}
    description={site.description}
  >
    <Introduction
      title={site.title + " Gear Lab"}
      description={site.description}
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
  </Page>
)

export default Home;

export async function getStaticProps() {
  const fields = ["title", "date", "slug"];
  const isLocal = process.env.NODE_ENV === "development";
  const posts = isLocal ? getAllPosts(fields) : getPublishedPosts(fields)
  return {
    props: { posts: posts }
  }
}