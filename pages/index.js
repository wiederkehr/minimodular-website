/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MainContent from "../components/MainContent";
import MainSidebar from "../components/MainSidebar";

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Header></Header>
        <Main>
          <MainContent></MainContent>
          <MainSidebar></MainSidebar>
        </Main>
        <Footer />
      </Page>
    );
  }
}
