import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { ProjectComponent } from '../../components/Project';
import { Navbar } from "../../components/Project/Navbar";
import { Footer } from '../../components/shared/Footer';

export default function Project ({ id }) {
  return (
    <>
      <Head>
        <title>José Ñiquen</title>
        <meta name="description" content="My name is José Ñiquen and this is my web portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-6"></div>
      <Navbar/>
      <ProjectComponent id={id}/>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async ({ locale, params }) => {

  const { id } = params;

  return {
    props: {
      id,
      ...(await serverSideTranslations(locale, [])),
    }
  }
}
