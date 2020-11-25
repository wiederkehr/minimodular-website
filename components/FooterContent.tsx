/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Container } from 'theme-ui'

const FooterContent: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderTop: "1px solid",
      borderColor: "border",
      fontSize: 1,
      padding: 3,
    }}
  >
    <Container
    sx={{
      display: ["flex"],
      flexBasis: 0,
      flexDirection: "row",
      flexGrow: 99999,
      flexWrap: "nowrap",
      justifyContent: "space-between",
      }}>
      {children}
    </Container>
  </section>
);

export default FooterContent;
