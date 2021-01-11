/** @jsx jsx */
import { jsx, Box, Styled } from "theme-ui";
import React from "react";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Notification from "../components/Notification";
import {Articles, Article} from "../components/Articles";

const Home: React.FC = () => (
  <Page>
    <Header />
    <Main>
      <Box sx={{
          my: 5
        }}>
        <Styled.h1>Minimodular Gear Lab</Styled.h1>
        <Styled.p sx={{
          fontFamily: "heading",
          fontSize: 4,
        }}>
          Ultralight, minimal, modular organization systems for the outdoors. Handmade in small batches in Brooklyn, New York. Aspiring to help people to enjoy human-powered adventures neatly and safely.
        </Styled.p>
      </Box>
      <Box sx={{
          my: 5
        }}>
        <Notification />
      </Box>
      <Box sx={{
          my: 5
        }}>
        <Styled.h2>Articles</Styled.h2>
        <Articles>
          <Article href="" published="30. December 2020">Article 1</Article>
          <Article href="" published="24. November 2020">Article 2</Article>
          <Article href="" published="16. October 2020">Article 3</Article>
        </Articles>
      </Box>
    </Main>
    <Footer />
  </Page>
);

export default Home;
