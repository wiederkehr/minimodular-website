/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import React from "react";
import config from "../site.config";

const Credit: React.FC = () => (
  <p sx={{
    margin: 0,
    padding: 0,
  }}>
    {"A side project by "}
    <Link
      sx={{
        color: "muted",
        textDecoration: "inherit",
        borderRadius: 4,
        px: 2,
        py: 1,
        ml: -2,
        backgroundColor: "surface",
        transition: "all 300ms",
        "&:hover": {
          backgroundColor: "background",
          color: "text",
          ml: 0,
        }
      }}
      href={config.authorURL}
      target="blank" >
      {config.author}
    </Link>
  </p>
)
  
export default Credit;
