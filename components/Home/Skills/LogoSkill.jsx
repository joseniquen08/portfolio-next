import { motion } from 'framer-motion';

export const LogoSkill = ({ name, y, rotate }) => {
  return (
    <div className='flex items-center justify-center'>
      <motion.div
        // drag
        // dragSnapToOrigin={true}
        // dragElastic={0.11}
        // dragMomentum={true}
        // dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
        // dragConstraints={{
        //   top: -5,
        //   left: -5,
        //   right: 5,
        //   bottom: 5
        // }}
        transition={{
          repeat: Infinity,
          duration: 6
        }}
        animate={{
          y,
          rotate,
        }}
        className="flex flex-col items-center justify-center space-y-4 text-center lg:space-y-1 w-24 h-24 p-2 rounded-xl overflow-hidden dark:bg-white dark:bg-opacity-5 dark:hover:bg-opacity-10"
      >
        <div className='relative w-full h-full bg-center bg-cover' style={{ backgroundImage: `url(icons/${name}.png)` }}></div>
      </motion.div>
    </div>
  )
}
