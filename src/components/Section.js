import { motion } from 'framer-motion'

const Section = ({ children, delay = 0 }) => (
  <motion.article
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </motion.article>
)

export default Section;
