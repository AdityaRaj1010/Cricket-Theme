'use client'

import { motion } from 'framer-motion'

interface AnimatedLayoutProps {
  children: React.ReactNode
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}