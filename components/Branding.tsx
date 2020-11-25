/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";
import { useColorMode } from "theme-ui";

const Branding: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Link href="/" passHref>
      <a
        sx={{
          alignItems: "center",
          color: "text",
          display: "flex",
          flexWrap: "nowrap",
          lineHeight: 1,
          padding: 3,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        aria-label="Home"
      >
        <img
          src={
            colorMode === "default"
              ? "/minimodular_logo_extended_vertical_positive.svg"
              : "/minimodular_logo_extended_vertical_negative.svg"
          }
          height="50"
          alt="Minimodules Logo"
        />
      </a>
    </Link>
  );
};

export default Branding;
