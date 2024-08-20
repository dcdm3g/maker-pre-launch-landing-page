import { ReactNode } from 'react'
import { motion } from '@/lib/framer-motion'

interface PossibilityProps {
  illustration: ReactNode
  title: string
  description: string
}

export function Possibility({
  illustration,
  title,
  description,
}: PossibilityProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-8 tablet:max-w-lg tablet:flex-row tablet:gap-14 desktop:max-w-none desktop:flex-col desktop:items-start desktop:gap-12"
      initial={{ y: 25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-[2.8125rem] bg-midnight-navy desktop:h-40 desktop:w-40">
        {illustration}
      </div>

      <div className="flex flex-col items-center gap-3 tablet:items-start desktop:gap-6">
        <h2 className="text-center text-lg text-pure-white tablet:text-start">
          {title}
        </h2>

        <p className="text-center text-base text-slate-gray tablet:text-start">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
