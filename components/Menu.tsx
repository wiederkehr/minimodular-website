/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";

const Menu: React.FC = () => (
  <ul sx={{
    m: 0,
    mr: -2,
    p: 0,
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    textTransform: "uppercase",
  }}>
    <Item href="/">Home</Item>
    <Item href="/about">About</Item>
  </ul>
);

export default Menu;

interface ItemProps {
  children?: React.ReactNode;
  href: string;
  last?: boolean;
}

const Item = (props: ItemProps) => (
  <li sx={{
    display: "inline-block",
  }}
  >
    <Link href={props.href} passHref>
      <a sx={{
        borderRadius: 4,
        px: 2,
        py: 2,
        color: "muted",
        backgroundColor: "surface",
        transition: "all 300ms",
      textDecoration: "inherit",
        "&:hover": {
          backgroundColor: "background",
        color: "text",
      }
    }}
    >
      {props.children}
    </a>
    </Link>
  </li>
  
);