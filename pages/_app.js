import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>José Ñiquen</title>
        <meta name="description" content="My name is José Ñiquen and this is my web portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
