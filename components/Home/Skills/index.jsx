import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import en from '../../../public/locales/en/skills';
import es from '../../../public/locales/es/skills';
import { skills } from '../../../utils/constants';
import { transitionScreenVariants } from "../../../utils/variants";
import { Skill } from "./Skill";

export const Skills = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <div id="skills" className="px-5 pt-24 pb-12 mx-auto sm:px-8 lg:px-16 max-w-5xl 2xl:max-w-6xl dark:text-white">
      <div className="space-y-6">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={transitionScreenVariants()}
          className="space-y-1"
        >
          <div className="flex justify-center md:justify-start">
            <p className="text-4xl py-1 font-bold tracking-tight text-center text-transparent md:text-5xl w-max md:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500 italic">{t.title}</p>
          </div>
          <div className="hidden md:block w-8 h-[1px] bg-stone-500 dark:bg-white"></div>
        </motion.div>
        <div className="space-y-6 py-5">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-medium tracking-wide sm:text-base lg:text-lg">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={transitionScreenVariants(0.1)}
                className="dark:bg-white dark:bg-opacity-5 px-5 py-6 rounded-lg space-y-4"
              >
                <div className="w-full flex">
                  <p className="text-xl lg:text-lg flex-none font-semibold cursor-default">{t.types.languages}</p>
                </div>
                <div className="text-base space-y-2">
                  {
                    skills.languages.map(({ id, img, name }) => <Skill key={id} image={img} name={name}/>)
                  }
                </div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={transitionScreenVariants(0.2)}
                className="dark:bg-white dark:bg-opacity-5 px-5 py-6 rounded-lg space-y-4"
              >
                <div className="w-full flex">
                  <p className="text-xl lg:text-lg flex-none font-semibold cursor-default">{t.types.lib_and_fram}</p>
                </div>
                <div className="text-base space-y-2">
                  {
                    skills.lib_fram.map(({ id, img, name }) => <Skill key={id} image={img} name={name}/>)
                  }
                </div>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={transitionScreenVariants(0.3)}
                className="dark:bg-white dark:bg-opacity-5 px-5 py-6 rounded-lg space-y-4"
              >
                <div className="w-full flex">
                  <p className="text-xl lg:text-lg flex-none font-semibold cursor-default">{t.types.tools}</p>
                </div>
                <div className="text-base space-y-2">
                  {
                    skills.tools.map(({ id, img, name }) => <Skill key={id} image={img} name={name}/>)
                  }
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
