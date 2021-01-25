import { Box } from "theme-ui";
import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC = (props: LayoutProps) => (
  <Box>
    <Page>
      <Header />
      <Main>
        {props.children}
      </Main>
      <Footer />
    </Page>
  </Box>
);

export default Layout;
