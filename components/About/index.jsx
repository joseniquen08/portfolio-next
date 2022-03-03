import { useRouter } from "next/router";
import en from '../../public/locales/en/about';
import es from '../../public/locales/es/about';

export const About = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <div id="about" className="px-4 pt-24 pb-12 mx-auto sm:px-10 max-w-5xl 2xl:max-w-6xl lg:px-16 text-stone-800 dark:text-white">
      <div className="flex">
        <div className="space-y-6">
          <div className="space-y-1">
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl font-bold tracking-tight text-center text-transparent md:text-5xl w-max md:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500 italic">{t.title}</p>
            </div>
            <hr className="hidden md:block w-8"/>
          </div>
          <div className="space-y-6 leading-7 md:leading-8 text-lg md:text-lg font-normal">
            <p className="text-center md:text-left">
              {t.about_me}
            </p>
            <p className="text-center md:text-left">
              {t.hobbies}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
