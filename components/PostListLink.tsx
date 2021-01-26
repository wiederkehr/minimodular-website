/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import React from "react";

interface PostListLinkProps {
  children?: React.ReactNode;
  date?: string;
  href: string;
}

const PostListLink = (props: PostListLinkProps) => (
  <Link href={props.href} passHref>
    <a
      sx={{
        backgroundColor: "transparent",
        borderRadius: 4,
        boxShadow: "none",
        color: "inherit",
        display: "flex",
        justifyContent: "space-between",
        mx: -2,
        p: 2,
        textDecoration: "inherit",
        transition: "all 300ms",
        "&:hover": {
          backgroundColor: "surface",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          mx: 0,
        }
      }}
    >
      <span
        sx={{
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        className="title"
      >
        {props.children}
      </span>
      <span
        sx={{
      }}
      >
        {props.date}
      </span>
  </a>
  </Link>
)

export default PostListLink;