import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta
            name="google-site-verification"
            content="OgQ4Ph6XbNj1cQjj3m5H-BPid_N3khZo3vYP4oxKPnA"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
