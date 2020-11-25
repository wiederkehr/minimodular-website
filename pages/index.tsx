/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Notification from "../components/Notification";

const Home: React.FC = () => (
  <Page>
    <Header />
    <Main>
      <Notification />
    </Main>
    <Footer />
  </Page>
);

export default Home;
