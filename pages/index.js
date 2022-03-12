import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { About } from '../components/Home/About';
import { Header } from '../components/Home/Header';
import { Navbar } from '../components/Home/Navbar';
import { Projects } from '../components/Home/Projects';
import { Skills } from '../components/Home/Skills';
import { Footer } from '../components/shared/Footer';
import { getProjects } from '../lib/projects';

export default function Home({ data }) {
  return (
    <>
      <div className="h-6"></div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects projects={data}/>
      <Skills/>
      <Footer/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {

  const data = await getProjects();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [])),
    },
  };
}
