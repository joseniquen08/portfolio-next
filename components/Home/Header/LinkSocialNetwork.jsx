import { motion } from "framer-motion";

export const LinkSocialNetwork = ({ href, children }) => {
  return (
    <motion.div whileHover="hover" className="w-14 h-14 relative group">
      <motion.div
        className="w-14 h-14 bg-slate-900 bg-opacity-5 dark:bg-white dark:bg-opacity-5 rounded-xl group-hover:bg-opacity-10"
        transition={{
          ease: 'easeInOut',
          duration: 0.65,
        }}
        variants={{
          hover: {
            rotate: 180,
          }
        }}
      ></motion.div>
      <a
        href={href}
        target='_blank'
        rel="noreferrer"
        className="w-14 h-14 flex items-center justify-center absolute inset-0"
      >
        {children}
      </a>
    </motion.div>
  )
}
