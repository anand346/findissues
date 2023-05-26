import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.5.1/flowbite.css" integrity="sha512-S38JcIr6/b8/7n/d/BmB1jYwXRNUYWW/wTFQKwz2ZRt6IxCL1UIxWPb+hYR1Ia9aiYseqh9TGBzJgNeNvFBDyA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
