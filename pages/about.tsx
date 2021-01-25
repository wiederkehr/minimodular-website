/** @jsx jsx */
import config from "../site.config"
import { jsx, Box, Styled } from "theme-ui";
import Meta from "../components/Meta";
import Layout from "../components/Layout";

const About = () => (
  <Layout>
    <Meta
      title={config.title + " | About"}
    />
    <Box sx={{my: 5}}>
      <Styled.h1>About {config.title}</Styled.h1>
      <Styled.p sx={{
        fontFamily: "heading",
        fontSize: 4,
      }}>
        We’re an experimental design studio for minimalistic and modular outdoor gear.
    </Styled.p>
    </Box>
  </Layout>
)

export default About;
