import { motion } from 'framer-motion';
import { useRouter } from "next/router";
import en from '../../../public/locales/en/about';
import es from '../../../public/locales/es/about';
import { transitionScreenVariants } from '../../../utils/variants';

export const About = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <motion.div
      id="about"
      className="px-4 pt-24 pb-0 mx-auto sm:px-10 max-w-5xl 2xl:max-w-6xl lg:px-16 text-stone-600 dark:text-white"
    >
      <div className="flex">
        <div className="space-y-6">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={transitionScreenVariants()}
            className="space-y-1"
          >
            <div className="flex flex-col items-center md:items-start">
              <p className="text-4xl py-1 font-bold tracking-tight text-center text-transparent md:text-5xl w-max md:text-left bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 dark:to-sky-500 italic">{t.title}</p>
            </div>
            <div className="hidden md:block w-8 h-[1px] bg-stone-500 dark:bg-white"></div>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={transitionScreenVariants()}
            className="space-y-6 leading-7 md:leading-8 text-lg md:text-lg font-normal"
          >
            <p className="text-center md:text-justify">
              {t.about_me}
            </p>
            <p className="text-center md:text-justify">
              {t.hobbies}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
