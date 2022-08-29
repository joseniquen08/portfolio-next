import { useRouter } from 'next/router';
import { HiArrowSmLeft, HiOutlineExternalLink, HiOutlineGlobeAlt } from "react-icons/hi";
import { SiGithub } from 'react-icons/si';

export const Header = ({ data }) => {

  const router = useRouter();
  // const { locale } = router;
  // const t = locale === 'en' ? en : es;

  return (
    <div className="flex flex-col justify-center flex-none space-y-10">
      <div className="flex space-x-2 lg:space-x-2.5 text-center lg:text-left">
        <button type="button" onClick={() => router.back()} className="flex-none flex items-center justify-center w-12 h-12 text-stone-700 dark:text-white dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-10 hover:bg-stone-900 rounded-full">
          <HiArrowSmLeft className="w-8 h-8" />
        </button>
        {
          data ? (
            <div className="flex flex-col space-y-4">
              <p className="text-2xl mt-1.5 lg:text-3xl font-semibold dark:text-white text-stone-700">
                {data.title}
              </p>
              <div className="flex space-x-4">
                <div className="flex space-x-4 dark:bg-white dark:bg-opacity-[0.15] bg-stone-900 bg-opacity-5 px-5 py-2.5 rounded-xl">
                  {
                    data.icons.map((icon) => (
                      <div
                        key={icon}
                        className="flex flex-col items-center justify-center text-center lg:space-y-1 w-7 h-7 overflow-hidden"
                      >
                        <div className='relative w-full h-full bg-center bg-cover' style={{ backgroundImage: `url(/icons/${icon}.png)` }}></div>
                      </div>
                    ))
                  }
                </div>
                <a href={data.github} target="_blank" rel="noreferrer" className="flex items-center space-x-2.5 px-5 py-2.5 bg-stone-300/40 hover:bg-stone-300/60 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 rounded-xl">
                  <SiGithub className="w-7 h-7" />
                  <span className="text-lg font-medium">GitHub</span>
                  <HiOutlineExternalLink className="w-5 h-5" />
                </a>
                <a href={data.web} target="_blank" rel="noreferrer" className="flex items-center space-x-2.5 px-5 py-2.5 bg-stone-300/40 hover:bg-stone-300/60 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 rounded-xl">
                  <HiOutlineGlobeAlt className="w-7 h-7" />
                  <span className="text-lg font-medium">Web</span>
                  <HiOutlineExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ) : (<></>)
        }
      </div>
    </div>
  )
}
