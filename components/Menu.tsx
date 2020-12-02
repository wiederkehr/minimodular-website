/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";

const Menu: React.FC = () => (
  <ul sx={{
    m: 0,
    p: 0,
    display: "flex",
    alignItems: "center",
    listStyle: "none",
  }}>
    <Item href="/">Home</Item>
    <Item href="/principles" last>Principles</Item>
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
    marginRight: props.last ? 0 : 3,
      }}>
    <Link href={props.href}>
    <a
      sx={{
      }}
      >
        {props.children}
    </a>
    </Link>
  </li>
  
);