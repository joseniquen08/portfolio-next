import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div className="font-inter bg-white bg-gradient-to-r from-gray-50 to-gray-50/95 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-900/95">
      <div className="h-6"></div>
      <Navbar/>
      <Header/>
    </div>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [])),
    },
  };
}
