import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { About } from '../components/Home/About';
import { Header } from '../components/Home/Header';
import { Navbar } from '../components/Home/Navbar';
import { Projects } from '../components/Home/Projects';
import { Skills } from '../components/Home/Skills';
import { Footer } from '../components/shared/Footer';

export default function Home() {
  return (
    <>
      <div className="h-6"></div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [])),
    },
  };
}
