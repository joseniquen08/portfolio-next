import { motion } from "framer-motion"

export const LinkSocialNetwork = ({ href, children }) => {
  return (
    <motion.div whileHover="hover" className="w-11 h-11 relative group">
      <motion.div
        className="w-11 h-11 group-hover:bg-slate-900 group-hover:bg-opacity-5 rounded-xl dark:group-hover:bg-white dark:group-hover:bg-opacity-5"
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
        className="w-11 h-11 flex items-center justify-center absolute inset-0"
      >
        {children}
      </a>
    </motion.div>
  )
}
