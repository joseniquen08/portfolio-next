import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { About } from '../components/Home/About';
import { Footer } from '../components/Home/Footer';
import { Header } from '../components/Home/Header';
import { Navbar } from '../components/Home/Navbar';
import { Projects } from '../components/Home/Projects';

export default function Home() {
  return (
    <>
      <div className="h-6"></div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
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
