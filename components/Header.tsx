/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import HeaderContent from "./HeaderContent";
import Branding from "./Branding";

const Header: React.FC = () => (
  <header
    sx={{
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      zIndex: 300,
    }}
  >
    <HeaderContent><Branding /></HeaderContent>
  </header>
);

export default Header;
