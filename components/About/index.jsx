import { useRouter } from "next/router";
import en from '../../public/locales/en/about';
import es from '../../public/locales/es/about';
import { NowPlaying } from "./NowPlaying";

export const About = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <div id="about" className="px-4 pt-24 pb-12 mx-auto sm:px-10 max-w-6xl lg:px-16 text-stone-800 dark:text-white">
      <div className="flex">
        <div className="space-y-10">
          <div className="flex justify-center md:justify-start">
            <p className="text-4xl font-bold tracking-wide text-center text-transparent md:text-5xl w-max lg:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500">{t.title}</p>
          </div>
          <div className="space-y-6 text-lg lg:text-xl font-medium">
            <p className="leading-8 lg:leading-9 text-center lg:text-left">
              {t.about_me}
            </p>
            <p className="leading-8 lg:leading-9 text-center lg:text-left">
              {t.hobbies}
            </p>
          </div>
        </div>
        <div>
          <NowPlaying/>
        </div>
      </div>
    </div>
  )
}
