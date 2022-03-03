import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import en from '../../public/locales/en/header';
import es from '../../public/locales/es/header';
import { LinkSocialNetwork } from "./LinkSocialNetwork";
import { NowPlaying } from "./NowPlaying";

const hoverVariants = {
  "hover": { x: -4, y: -4 }
}

export const Header = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <div className="flex flex-col-reverse space-y-reverse space-y-12 lg:flex-row w-full px-2 lg:px-16 py-10 lg:pt-28 lg:pb-16 mx-auto max-w-5xl 2xl:max-w-6xl">
      <div className="flex flex-col justify-center flex-none space-y-10">
        <div className="flex flex-col justify-center space-y-1 lg:space-y-2.5 text-center lg:text-left">
          <p className="text-3xl lg:text-4xl font-semibold dark:text-white text-stone-700">{t.hi}</p>
          <p
            className="text-5xl lg:text-6xl break-words tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 font-bold py-1"
          >
            {t.name}
          </p>
          <p className="text-3xl break-words tracking-tight lg:text-4xl font-semibold text-stone-500 dark:text-white">{t.junior}</p>
        </div>
        <div className="flex pl-1 justify-center lg:justify-start space-x-5 text-lg dark:text-white text-slate-900">
          <LinkSocialNetwork href="https://github.com/joseniquen08">
            <SiGithub className="h-7 w-7"/>
          </LinkSocialNetwork>
          <LinkSocialNetwork href="https://github.com/joseniquen08">
            <SiLinkedin className="h-7 w-7"/>
          </LinkSocialNetwork>
          <LinkSocialNetwork href="https://github.com/joseniquen08">
            <SiInstagram className="h-7 w-7"/>
          </LinkSocialNetwork>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end lg:pr-12 w-full">
        <div className="relative w-60 lg:w-72">
          <motion.div whileHover="hover" className="relative h-60 w-60 lg:w-72 lg:h-72">
            <Image src="/images/perfil.jpg" priority alt="Perfil" layout="fill" className="absolute object-scale-down saturate-200 rounded-2xl z-20"/>
            <motion.div
              variants={hoverVariants}
              className="border-2 border-blue-600 dark:border-blue-500 absolute w-60 h-60 z-10 hidden lg:block lg:w-72 lg:h-72 rounded-2xl -bottom-[1.15rem] -right-[1.15rem]"></motion.div>
          </motion.div>
          <div className="lg:absolute lg:-bottom-32 w-full">
            <NowPlaying/>
          </div>
        </div>
      </div>
    </div>
  )
}
