/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import FooterContent from "./FooterContent";
import Copyright from "./Copyright";
import Credit from "./Credit";

const Footer: React.FC = () => (
  <footer>  
    <FooterContent>
      <Copyright />
      <Credit />
    </FooterContent>
  </footer>
);

export default Footer;
