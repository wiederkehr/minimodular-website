/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import React from "react";
import Brand from "./Brand";
import Menu from "./Menu";

const Header: React.FC = () => (
  <header sx={{
      backgroundColor: "surface",
      borderBottom: "1px solid",
      borderColor: "border",
      fontSize: 1,
      padding: 3,
    }}>
    <Container
    sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      }}>
      <Brand />
    </Container>
  </header>
);

export default Header;
