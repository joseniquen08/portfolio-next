import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { About } from '../components/Home/About';
import { Footer } from '../components/Home/Footer';
import { Header } from '../components/Home/Header';
import { Navbar } from '../components/Home/Navbar';
import { Projects } from '../components/Home/Projects';

export default function Home({ data }) {
  return (
    <>
      <div className="h-6"></div>
      <Navbar/>
      <Header/>
      <About/>
      <Projects projects={data}/>
      <Footer/>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {

  const projects = await fetch(`http://localhost:3000/api/projects`);
  const data = await projects.json();

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [])),
    },
  };
}
