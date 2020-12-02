/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Link from "next/link";
import { useColorMode } from "theme-ui";

const Brand: React.FC = () => {
  const [colorMode] = useColorMode();
  return (
    <Link href="/" passHref>
      <a
        sx={{
          lineHeight: 1,
        }}
        aria-label="Minimodular Home"
        title="Minimodular Home"
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

export default Brand;
