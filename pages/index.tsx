/** @jsx jsx */
import config from "../site.config"
import { jsx, Box, Styled } from "theme-ui";
import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Notification from "../components/Notification";
import PostList from "../components/PostList";
import PostListItem from "../components/PostListItem";
import { getAllPosts } from '../api';

const Home = ({posts}) => (
  <Layout>
    <Meta />
    <Box sx={{my: 5}}>
      <Styled.h1>{config.title} Gear Lab</Styled.h1>
      <Styled.p sx={{
        fontFamily: "heading",
        fontSize: 4,
      }}>
        {config.description}
    </Styled.p>
    </Box>
    <Box sx={{my: 5}}>
      <Notification />
    </Box>
    <Box sx={{my: 5}}>
      <Styled.h2>Projects</Styled.h2>
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
    </Box>
  </Layout>
)

export default Home;

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug"])
  return {
    props: { posts: allPosts }
  }
}
