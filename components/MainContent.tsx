/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import React from "react";

const MainContent: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "background",
      flexBasis: 0,
      flexGrow: 99999,
      padding: 3,
    }}
  >
    <Container>
      {children}
    </Container>
  </section>
);

export default MainContent;
