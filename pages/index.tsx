/** @jsx jsx */
import { jsx, Box, Divider, Styled } from "theme-ui";
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
      <Box sx={{
          my: 5
        }}>
        <Styled.h1>Minimodular Gear Lab</Styled.h1>
        <Styled.p sx={{
          fontFamily: "heading",
          fontSize: 4,
        }}>
          Ultralight, minimal, modular organization systems for the outdoors. Handmade in small batches in Brooklyn, New York. Helping everyone to enjoy human-powered adventures neatly and safely.
        </Styled.p>
      </Box>
      <Box sx={{
          my: 5
        }}>
        <Notification />
      </Box>
    </Main>
    <Footer />
  </Page>
);

export default Home;
