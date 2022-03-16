import { useRouter } from "next/router";
import en from '../../../public/locales/en/skills';
import es from '../../../public/locales/es/skills';
import { LogoSkill } from "./LogoSkill";

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
        <div className="space-y-6 py-5">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
              <div className="dark:bg-white dark:bg-opacity-5 px-5 py-6 rounded-lg space-y-3">
                <p className="text-xl font-semibold">Languages</p>
                <div className="space-y-2">
                  <LogoSkill image='javascript' name='JavaScript'/>
                  <LogoSkill image='html5' name='HTML5'/>
                  <LogoSkill image='css3' name='CSS3'/>
                  <LogoSkill image='java' name='Java'/>
                  <LogoSkill image='python' name='Python'/>
                  <LogoSkill image='php' name='PHP'/>
                </div>
              </div>
              <div className="dark:bg-white dark:bg-opacity-5 px-5 py-6 rounded-lg space-y-3">
                <p className="text-xl font-semibold">Libraries & Frameworks</p>
                <div className="space-y-2">
                  <LogoSkill image='reactjs' name='React'/>
                  <LogoSkill image='nextjs' name='Nextjs'/>
                  <LogoSkill image='tailwindcss' name='Tailwind CSS'/>
                  <LogoSkill image='spring' name='Spring'/>
                  <LogoSkill image='codeigniter' name='CodeIgniter'/>
                </div>
              </div>
              <div className="dark:bg-white dark:bg-opacity-5 px-5 py-6 rounded-lg space-y-3">
                <p className="text-xl font-semibold">Tools</p>
                <div className="space-y-2">
                  <LogoSkill image='mongodb' name='MongoDB'/>
                  <LogoSkill image='mysql' name='MySQL'/>
                  <LogoSkill image='firebase'  name='Firebase'/>
                  <LogoSkill image='vscode' name='VSCode'/>
                  <LogoSkill image='intellijidea' name='IntellijIdea'/>
                  <LogoSkill image='photoshop' name='Photoshop'/>
                  <LogoSkill image='illustrator' name='Illustrator'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
