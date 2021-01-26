import React from "react";
import Page from "./Page";
import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  author?: string;
  image?: string;
}

const Layout = (props: LayoutProps) => (
  <Page>
    <Meta {...props} />
    <Header />
    <Main>
      {props.children}
    </Main>
    <Footer />
  </Page>
);

export default Layout;
