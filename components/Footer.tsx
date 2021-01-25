/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import React from "react";
import Copyright from "./Copyright";
import Credit from "./Credit";

const Footer: React.FC = () => (
  <footer
    sx={{
      backgroundColor: "surface",
      borderTop: "1px solid",
      borderColor: "border",
      color: "muted",
      fontSize: 1,
      padding: 3,
      textTransform: "uppercase",
    }}>  
    <Container
    sx={{
      display: "flex",
      flexDirection: ["column", "row"],
      justifyContent: "space-between",
      }}>
      <Copyright />
      <Credit />
    </Container>
  </footer>
);

export default Footer;
