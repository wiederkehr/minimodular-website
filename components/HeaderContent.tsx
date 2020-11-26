/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import React from "react";

const HeaderContent: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderBottom: "1px solid",
      borderColor: "border",
      fontSize: 1,
      padding: 3,
    }}
  >
    <Container
    sx={{
      display: "flex",
      flexDirection: ["column", "row"],
      justifyContent: "space-between",
      }}>
      {children}
    </Container>
  </section>
);

export default HeaderContent;
