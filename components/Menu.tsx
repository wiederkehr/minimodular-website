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

const Item: React.FC = ({ href, children, last }) => (
  <li sx={{
    display: "inline-block",
    marginRight: last ? 0 : 3,
      }}>
    <Link href="/">
    <a
      sx={{
      }}
      >
        {children}
    </a>
    </Link>
  </li>
  
);