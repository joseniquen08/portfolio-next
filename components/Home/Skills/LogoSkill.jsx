import { motion } from 'framer-motion';
import Image from 'next/image';

export const LogoSkill = ({ name, y, rotate }) => {
  return (
    <motion.div
      transition={{
        repeat: Infinity,
        duration: 6
      }}
      animate={{
        y,
        rotate,
      }}
      className="flex flex-col items-center space-y-4 text-center lg:space-y-1 w-24 h-24 p-2 rounded-xl overflow-hidden dark:bg-white dark:bg-opacity-5"
    >
      <div className='relative w-full h-full'>
        <Image src={`/icons/${name}.png`} alt={`logo_${name}`} layout='fill' className="object-cover object-center" />
      </div>
    </motion.div>
  )
}
