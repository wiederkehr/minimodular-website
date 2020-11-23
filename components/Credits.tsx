/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Link } from 'theme-ui'

const Credits: React.FC = () => {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <p sx={{ padding: 0, margin: 0 }}>© {year} <Link href="https://benjaminwiederkehr.com">Benjamin Wiederkehr </Link></p>
  )
}
  
export default Credits;
