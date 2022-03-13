import axios from 'axios';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { Header } from '../../components/Project/Header';
import { Navbar } from "../../components/Project/Navbar";
import { Footer } from '../../components/shared/Footer';

export default function Project ({ data }) {
  return (
    <>
      <Head>
        <title>{`${data.title} - José Ñiquen`}</title>
        <meta name="description" content="My name is José Ñiquen and this is my web portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-6"></div>
      <Navbar/>
      <Header title={data.title}/>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async ({ locale, params }) => {

  const { id } = params;
  const data = await axios.get(`http://localhost:3000/api/projects/${id}`)
  .then(response => response.data);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [])),
    }
  }
}
