/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import MenuItem from "./MenuItem";

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
    <MenuItem href="/">Home</MenuItem>
    <MenuItem href="/about">About</MenuItem>
  </ul>
);

export default Menu;