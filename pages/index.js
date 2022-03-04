import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Projects } from '../components/Projects';

export default function Home() {
  return (
    <>
      <div className="h-6"></div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [])),
    },
  };
}
