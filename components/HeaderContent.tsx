/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const HeaderContent: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderBottom: "1px solid",
      borderColor: "border",
      display: "flex",
      flexBasis: 0,
      flexDirection: "row",
      flexGrow: 99999,
      flexWrap: "nowrap",
      fontSize: 0,
      justifyContent: "center",
      padding: 3,
    }}
  >
    {children}
  </section>
);

export default HeaderContent;
