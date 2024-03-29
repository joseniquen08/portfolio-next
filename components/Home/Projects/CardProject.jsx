import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineEye, HiOutlineGlobeAlt } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { transitionScreenVariants } from "../../../utils/variants";

export const CardProject = ({ id, image, title, description, web, github, locale }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="relative" variants={transitionScreenVariants()}>
        <div className="relative z-20 overflow-hidden cursor-pointer card rounded-xl h-full bg-slate-700">
          <div className="h-60 xs:h-80 md:h-52 lg:h-64 2xl:h-72 relative">
            <Image src={image} alt="image_random" layout="fill" priority className="object-cover object-center w-full z-0 img opacity-40 md:opacity-100"/>
          </div>
          <div className="absolute bottom-0 flex items-center w-full h-10 px-6 text-white footer sm:duration-500 sm:translate-y-full bg-slate-900/70">
            <p className="text-lg font-medium">{title}</p>
          </div>
          <p className="absolute inset-0 flex items-center justify-center text-xl font-medium text-white alert md:hidden md:font-normal">{locale === 'en' ? description.en : description.es}</p>
          <a href={web} target="_blank" rel="noreferrer" className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 right-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
            <HiOutlineGlobeAlt className="w-6 h-6" />
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="absolute p-2 text-white links sm:duration-500 sm:-translate-y-20 top-4 left-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
            <SiGithub className="w-6 h-6" />
          </a>
          <Link href={`project/${id}`} passHref>
            <a className="absolute p-2 text-white links sm:duration-500 sm:translate-y-32 bottom-14 right-5 bg-slate-900/40 hover:bg-slate-900/60 rounded-xl">
              <HiOutlineEye className="w-6 h-6" />
            </a>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
