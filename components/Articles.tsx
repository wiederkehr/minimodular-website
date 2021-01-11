/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import React from "react";

interface ArticlesProps {
  children?: React.ReactNode;
}

export const Articles: React.FC = (props: ArticlesProps) => (
  <ul sx={{
    margin: 0,
    padding: 0,
    listStyle: "none",
  }}>
    {props.children}
    </ul>
)

interface ArticleProps {
  children?: React.ReactNode;
  published?: string;
  href: string;
}

export const Article = (props: ArticleProps) => (
  <li sx={{
    margin: 0,
    padding: 0,
  }}>
    <Link href={props.href} >
      <a
      sx={{
      }}
      >
        {props.children}
    </a></Link>
  </li>
  )