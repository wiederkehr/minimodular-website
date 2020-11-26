/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";
import { useColorMode } from "theme-ui";

const Branding: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Link href="/">
      <a
        sx={{
          lineHeight: 1,
        }}
        aria-label="Home"
      >
        <img
          src={
            colorMode === "default"
              ? "/minimodular_logo_positive.svg"
              : "/minimodular_logo_negative.svg"
          }
          height="32"
          alt="Minimodules Logo"
        />
      </a>
    </Link>
  );
};

export default Branding;
