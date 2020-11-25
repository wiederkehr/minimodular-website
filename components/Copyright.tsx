/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Copyright: React.FC = () => {
  let today = new Date();
  let year = today.getFullYear();
  return (
    <p sx={{ padding: 0, margin: 0 }}>© {year}</p>
  )
}
  
export default Copyright;
