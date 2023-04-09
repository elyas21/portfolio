import { motion } from "framer-motion";

import { styles } from "../style";
import { staggerContainer } from "../utils";

export default function SectionWrapper(Component: any, idName: string) {
  return function HOC() {
    return (
      <motion.section
      variants={staggerContainer(Component,1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>

      <Component />
    </motion.section>
    )
  }
}
