import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/minimodules_logo_positive.png"
          ></link>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com">
          </link>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;700&family=Source+Serif+Pro:wght@700;900&display=swap"
            rel="stylesheet">
          </link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
