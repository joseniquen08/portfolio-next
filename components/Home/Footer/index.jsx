import { useRouter } from "next/router";
import { HiOutlinePlusSm } from 'react-icons/hi';
import { SiGithub, SiInstagram, SiLinkedin, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import en from '../../../public/locales/en/footer';
import es from '../../../public/locales/es/footer';
import { LinkSocialNetwork } from "./LinkSocialNetwork";

export const Footer = () => {

  const { locale } = useRouter();
  const t = locale === 'en' ? en : es;

  return (
    <footer className="text-stone-900 dark:text-white">
      <div className="px-4 sm:px-10 lg:px-16 pt-6 pb-10 md:py-6 mx-auto max-w-6xl">
        <div className="relative flex flex-col md:flex-row space-y-8 md:space-y-0 w-full items-center justify-between">
          <div className="flex flex-col z-20 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-2.5 items-center justify-center">
            <p className="text-sm md:text-base">{t.made_with}</p>
            <div className="flex items-center space-x-1.5" >
              <SiNextdotjs className="w-16 h-16 md:w-9 md:h-9" />
              <HiOutlinePlusSm className="w-6 h-6 md:w-4 md:h-4" />
              <SiTailwindcss className="w-16 h-16 md:w-9 md:h-9" />
            </div>
          </div>
          <p className="text-center md:absolute z-10 inset-0 font-medium md:font-normal text-lg flex items-center justify-center">{t.author}</p>
          <div className="flex justify-center z-20 space-x-4 md:space-x-2 text-lg">
            <LinkSocialNetwork href="https://github.com/joseniquen08">
              <SiGithub className="w-6 h-6"/>
            </LinkSocialNetwork>
            <LinkSocialNetwork href="https://github.com/joseniquen08">
              <SiLinkedin className="w-6 h-6"/>
            </LinkSocialNetwork>
            <LinkSocialNetwork href="https://github.com/joseniquen08">
              <SiInstagram className="w-6 h-6"/>
            </LinkSocialNetwork>
          </div>
        </div>
      </div>
    </footer>
  )
}
