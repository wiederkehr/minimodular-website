/** @jsx jsx */
import { jsx } from "theme-ui";
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
    {children}
  </section>
);

export default MainContent;
