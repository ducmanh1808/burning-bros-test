import { motion } from "motion/react"
import type { Variants } from "motion/react"
import type { PropsWithChildren } from "react"

export const MotionCard: React.FC<PropsWithChildren> = ({ children }) => {
  const cardVariants: Variants = {
    offscreen: {
      x: "110%",
    },
    onscreen: {
      x: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div variants={cardVariants}>{children}</motion.div>
    </motion.div>
  )
}
