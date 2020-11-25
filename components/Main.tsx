/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import MainContent from "./MainContent";

const Main: React.FC = ({ children }) => (
  <main
    sx={{
      width: "100%",
      display: "flex",
      flexBasis: "auto",
      flexDirection: "row-reverse",
      flexGrow: 1,
      flexShrink: 1,
      flexWrap: "wrap",
      position: "relative",
      zIndex: 100,
    }}
  >
    <MainContent>{children}</MainContent>
  </main>
);

export default Main;
