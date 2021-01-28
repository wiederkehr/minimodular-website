import palette from "./palette";

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: "48rem",
  },
  fonts: {
    body: "'Source Code Pro', monospace",
    heading: "'Source Serif Pro', serif",
    monospace: "'Source Code Pro', monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
    subheading: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: palette.mono[0],
    surface: palette.mono[12],
    onSurface: palette.mono[0],
    background: palette.mono[10],
    onBackground: palette.mono[0],
    border: palette.mono[8],
    primary: "#D50000",
    onPrimary: palette.mono[12],
    disabled: palette.mono[8],
    muted: palette.mono[6],
    modes: {
      dark: {
        text: palette.mono[12],
        surface: palette.mono[0],
        onSurface: palette.mono[12],
        background: palette.mono[2],
        onBackground: palette.mono[12],
        border: palette.mono[2],
        primary: "#D50000",
        onPrimary: palette.mono[12],
        disabled: palette.mono[4],
      },
    },
  },
  buttons: {},
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "surface",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
      mt: "3rem",
      mb: "1.5rem",
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "subheading",
      fontSize: 4,
      mt: "3rem",
      mb: "1rem",
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "subheading",
      fontSize: 3,
      mt: "3rem",
      mb: "1rem",
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "subheading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "subheading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "subheading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      maxWidth: "48rem",
    },
    a: {
      color: "text",
      "&:hover": {
        color: "primary",
      },
    },
    pre: {
      fontFamily: "monospace",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderSpacing: 0,
    },
    th: {
      borderBottomStyle: "solid",
    },
    td: {
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
    hr: {
      color: "border",
    },
    ul: {
      paddingLeft: 3,
    },
    li: {},
    strong: {
      fontWeight: "bold",
    },
  },
};
