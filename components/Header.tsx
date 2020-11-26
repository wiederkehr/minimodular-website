/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import HeaderContent from "./HeaderContent";
import Branding from "./Branding";

const Header: React.FC = () => (
  <header>
    <HeaderContent><Branding /></HeaderContent>
  </header>
);

export default Header;
