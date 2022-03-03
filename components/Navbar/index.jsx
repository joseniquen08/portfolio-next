import { AnimatePresence, motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Link as LinkReactScroll } from 'react-scroll';
import en from '../../public/locales/en/navbar';
import es from '../../public/locales/es/navbar';
import { ButtonContact } from './ButtonContact';
import { MenuBurger } from './MenuBurger';
import { MenuLanguage } from './MenuLanguage';
import { MenuTheme } from './MenuTheme';
import { ModalContact } from './ModalContact';

export const Navbar = () => {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const [showBg, setShowBg] = useState(false);
  const [themeSelected, setThemeSelected] = useState("sys");
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : es;

  useEffect(() => {
    if (!('theme' in localStorage)) {
      setThemeSelected("sys");
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName("HTML")[0].setAttribute("class", "dark");
      }
    } else {
      document.getElementsByTagName("HTML")[0].setAttribute("class", localStorage.getItem("theme"));
      if (localStorage.getItem('theme') === "dark") {
        setThemeSelected("dark");
      } else if (localStorage.getItem('theme') === "light") {
        setThemeSelected("light");
      }
    }
  }, [themeSelected]);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 24) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    });
  }


  const changeTheme = (theme) => {
    if (theme === "sys") {
      localStorage.removeItem("theme");
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.getElementsByTagName("HTML")[0].setAttribute("class", "dark");
      } else {
        document.getElementsByTagName("HTML")[0].setAttribute("class", theme);
      }
    } else {
      localStorage.setItem("theme", theme);
      document.getElementsByTagName("HTML")[0].setAttribute("class", theme);
    }
    setThemeSelected(theme);
  }

  const closeContactModal = () => {
    setContactModalIsOpen(false);
  }

  const openContactModal = () => {
    setContactModalIsOpen(true);
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <nav className={`dark:text-white text-gray-700 mt-1 z-40 sticky top-0 w-full bg-white bg-gradient-to-r from-gray-50 to-gray-50/95 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-900/95 ${showBg ? 'border-b shadow-lg shadow-gray-200/50 dark:shadow-slate-900/50' : ''}`}>
      <div className="relative flex flex-row items-center justify-between px-3 py-3 lg:py-2 sm:px-4 lg:px-16">
          <div className="flex items-center">
            <div className="flex items-center md:hidden">
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed" }
              >
                <MenuBurger toggle={() => toggleOpen()}/>
              </motion.nav>
            </div>
            <div className="z-10 flex items-center pl-2 sm:pl-2">
              <Link href="/" onClick={scrollTop} passHref>
                <a className="text-xl font-semibold tracking-wide sm:text-2xl lg:text-3xl dark:text-gray-200 text-slate-800 focus:outline-none">jose<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">niquen</span><span className="font-black text-green-600">.</span></a>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="top-0 left-0 z-0 flex flex-row items-center justify-center w-full h-full space-x-10 text-lg font-semibold dark:font-medium">
              <li>
                <LinkReactScroll to="about" smooth={true} duration={500} className="cursor-pointer focus:outline-none tracking-wide [text-decoration:underline_2px_rgba(255,255,255,0)] [transition:text-decoration-color_500ms] hover:[text-decoration-color:rgba(90,90,90,1)] dark:hover:[text-decoration-color:rgba(255,255,255,1)] underline-offset-8 hover:underline-offset-8">{t.ul.about_me}</LinkReactScroll>
              </li>
              <li>
                <LinkReactScroll to="skills" smooth={true} duration={500} className="cursor-pointer focus:outline-none tracking-wide [text-decoration:underline_2px_rgba(255,255,255,0)] [transition:text-decoration-color_500ms] hover:[text-decoration-color:rgba(90,90,90,1)] dark:hover:[text-decoration-color:rgba(255,255,255,1)] underline-offset-8 hover:underline-offset-8">{t.ul.skills}</LinkReactScroll>
              </li>
              <li>
                <LinkReactScroll to="projects" smooth={true} duration={500} className="cursor-pointer focus:outline-none tracking-wide [text-decoration:underline_2px_rgba(255,255,255,0)] [transition:text-decoration-color_500ms] hover:[text-decoration-color:rgba(90,90,90,1)] dark:hover:[text-decoration-color:rgba(255,255,255,1)] underline-offset-8 hover:underline-offset-8">{t.ul.projects}</LinkReactScroll>
              </li>
            </ul>
          </div>
          <div className="flex flex-row items-center space-x-1 sm:space-x-2 lg:space-x-3">
            <MenuLanguage/>
            <MenuTheme themeSelected={themeSelected} setThemeSelected={setThemeSelected} changeTheme={changeTheme}/>
            <div className="pr-1.5">
              <ButtonContact openContactModal={openContactModal}/>
            </div>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            initial={false}
            transition={{ type: "spring" }}
            animate={isOpen ? "open" : "closed"}
            variants={{
              closed: { opacity: 0, display: 'none' },
              open: { opacity: 1, display: 'block' },
            }}
            exit={{ opacity: 0, display: 'none' }}
            className="absolute w-full font-medium text-gray-800 bg-gray-200 shadow-xl md:hidden dark:text-white dark:bg-slate-800 shadow-gray-200/50 dark:shadow-slate-800/50"
          >
            <div className="px-2.5 sm:px-4 py-3 space-y-1.5">
              <LinkReactScroll onClick={() => toggleOpen()} to="about" smooth={true} duration={500} className="block cursor-pointer rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5">{t.ul.about_me}</LinkReactScroll>
              <LinkReactScroll onClick={() => toggleOpen()} to="skills" smooth={true} duration={500} className="block cursor-pointer rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5">{t.ul.skills}</LinkReactScroll>
              <LinkReactScroll onClick={() => toggleOpen()} to="projects" smooth={true} duration={500} className="block cursor-pointer rounded-xl focus:bg-gray-300 dark:focus:bg-slate-900 tracking-wide px-3 py-1.5">{t.ul.projects}</LinkReactScroll>
            </div>
          </motion.div>
        </AnimatePresence>
      </nav>
      <ModalContact theme={themeSelected} contactModalIsOpen={contactModalIsOpen} closeContactModal={closeContactModal}/>
    </>
  )
}
