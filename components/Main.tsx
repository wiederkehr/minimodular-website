/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import React from "react";

const Main: React.FC = ({ children }) => (
  <main
    sx={{
      backgroundColor: "background",
      display: "flex",
      flexGrow: 1,
      px: 3,
      pt: 3,
      pb: 5,
      position: "relative",
      width: "100%",
      zIndex: 100,
    }}
  >
    <Container>
      {children}
    </Container>
  </main>
);

export default Main;
