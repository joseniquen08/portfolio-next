import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navbar } from "../../components/Project/Navbar";

export default function Project ({ data }) {
  return (
    <>
      <div className="h-6"></div>
      <Navbar/>
      <p className='dark:text-white'>{data.title}</p>
    </>
  )
}
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'licius' } },
    ],
    fallback: true
  }
}

export const getStaticProps = async ({ locale, params }) => {

  const { id } = params;

  const project = await fetch(`http://localhost:3000/api/projects/${id}`);
  const data = await project.json();

  console.log(data);

  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, [])),
    },
  };
}
