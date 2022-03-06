import { useRouter } from "next/router";
import en from '../../../public/locales/en/skills';
import es from '../../../public/locales/es/skills';
import { LogoSkill } from './LogoSkill';

export const Skills = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <div id="skills" className="px-5 pt-24 pb-12 mx-auto sm:px-8 lg:px-16 max-w-5xl 2xl:max-w-6xl dark:text-white">
      <div className="space-y-6">
        <div className="space-y-1">
          <div className="flex justify-center md:justify-start">
            <p className="text-4xl py-1 font-bold tracking-tight text-center text-transparent md:text-5xl w-max md:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500 italic">{t.title}</p>
          </div>
          <div className="hidden md:block w-8 h-[1px] bg-stone-500 dark:bg-white"></div>
        </div>
        <div className="space-y-6">
          <div className="w-full max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-10 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
              <LogoSkill name='javascript' y={[5, 20, 5]} rotate={[3, -3, 3]}/>
              <LogoSkill name='html5' y={[15, 0, 15]} rotate={[3, -3, 3]}/>
              <LogoSkill name='css3' y={[5, 20, 5]} rotate={[3, -3, 3]}/>
              <LogoSkill name='java' y={[5, 20, 5]} rotate={[3, -3, 3]}/>
              <LogoSkill name='python' y={[5, 20, 5]} rotate={[3, -3, 3]}/>
              <LogoSkill name='php' y={[5, 20, 5]} rotate={[3, -3, 3]}/>
              <LogoSkill name='reactjs' y={[5, 20, 5]} rotate={[3, -3, 3]}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
