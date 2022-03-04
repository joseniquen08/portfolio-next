import { motion } from "framer-motion";
import Image from 'next/image';
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const hoverVariants = {
  "hover": {
    x: 18,
    y: 18,
    scale: 1.03,
    transition: {
      duration: 0.4
    }
  }
}

export const CardProject = ({ image, name, alert, href, github }) => {
  return (
    <motion.div whileHover="hover" className="relative">
      <motion.div whileHover={{ scale: 1.03, transition: { duration: 0.4 } }} className="relative z-20 overflow-hidden cursor-pointer card rounded-xl h-full bg-slate-700">
        <div className="relative">
          <div className="h-60 xs:h-80 md:h-52 lg:h-64 2xl:h-72">
            <Image src={image} alt="image_random" layout="fill" priority className="object-cover object-center w-full z-0 img opacity-40 md:opacity-100"/>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-center w-full h-10 px-6 text-white footer sm:duration-500 sm:translate-y-full bg-slate-900/70">
          <p className="text-lg font-medium">{name}</p>
        </div>
        <p className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white alert md:hidden md:font-normal">{alert}</p>
        <a href={`${href}`} target="_blank" rel="noreferrer"className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 right-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
          <HiOutlineGlobeAlt className="w-6 h-6" />
        </a>
        <a href={`${github}`} target="_blank" rel="noreferrer"className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 left-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
          <SiGithub className="w-6 h-6" />
        </a>
      </motion.div>
      <motion.div
        variants={hoverVariants}
        className="border-2 border-blue-600 dark:border-blue-500 absolute inset-1 z-10 hidden lg:block rounded-2xl"></motion.div>
    </motion.div>
  );
};
