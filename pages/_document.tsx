import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="text-white bg-black scroll-smooth">
      <Head />
      <body className="h-screen overflow-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
