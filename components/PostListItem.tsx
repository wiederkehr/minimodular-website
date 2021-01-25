/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import PostListLink from "./PostListLink";

interface PostListItemProps {
  children?: React.ReactNode;
  date?: string;
  href: string;
}

const PostListItem = (props: PostListItemProps) => (
  <li sx={{
    margin: 0,
    padding: 0,
  }}>
    <PostListLink href={props.href} date={props.date}>{props.children}</PostListLink>
  </li>
)

export default PostListItem;