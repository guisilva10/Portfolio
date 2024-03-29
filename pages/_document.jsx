import { Html, Head, Main, NextScript} from 'next/document';

export default function Document (){
  return (
    <Html>
      <Head>
        <title>Guilherme Lopes</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2:family=Roboto:wght@400;500;700&display=swap" />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  );
}