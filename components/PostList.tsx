/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

interface PostListProps {
  children?: React.ReactNode;
}

const PostList: React.FC = (props: PostListProps) => (
  <ul sx={{
    margin: 0,
    padding: 0,
    listStyle: "none",
  }}>
    {props.children}
    </ul>
)

export default PostList;