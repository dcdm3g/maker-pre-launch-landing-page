import Image from 'next/image'
import { motion } from '@/lib/framer-motion'
import { CheckIcon } from './check-icon'
import freePlanIcon from 'public/icon-free.svg'
import paidPlanIcon from 'public/icon-paid.svg'

interface PricingPlanProps {
  type: 'free' | 'paid'
}

const planInfo = {
  free: {
    icon: freePlanIcon,
    title: 'Dip your toe',
    description:
      'Just getting started? No problem at all! Our free plan will take you a long way.',
    benefits: [
      'Unlimited products',
      'Basic analytics',
      'Limited marketplace exposure',
      '10% fee per transaction',
    ],
  },
  paid: {
    icon: paidPlanIcon,
    title: 'Dive right in',
    description:
      'Ready for the big time? Our paid plan will help you take your business to the next level.',
    benefits: [
      'Custom domain',
      'Advanced analytics and reports',
      'High marketplace visibility',
      '5% fee per transaction',
    ],
  },
}

export function PricingPlan({ type }: PricingPlanProps) {
  const isTypeFree = type === 'free'
  const { icon, title, description, benefits } = planInfo[type]

  return (
    <motion.div
      className={`relative flex flex-1 flex-col gap-5 rounded-lg pb-8 pl-8 pr-7 tablet:px-[2.38rem] ${
        isTypeFree
          ? 'bg-midnight-navy pt-12 tablet:pb-12'
          : 'bg-aqua-splash pt-16 tablet:pb-14'
      }`}
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className={`absolute ${
          isTypeFree
            ? '-top-6 left-8 tablet:left-[2.38rem]'
            : '-top-8 left-[2.31rem]'
        }`}
      >
        <div
          className={`relative ${
            isTypeFree
              ? 'aspect-square w-[2.875rem]'
              : 'aspect-[51/65] w-[3.1875rem]'
          }`}
        >
          <Image src={icon} alt="" fill />
        </div>
      </div>

      <h3
        className={`text-lg ${
          isTypeFree ? 'text-pure-white' : 'text-deep-night'
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-base ${
          isTypeFree ? 'text-pure-white/60' : 'text-deep-night/60'
        }`}
      >
        {description}
      </p>

      <p
        className={`mt-1 flex items-center gap-2 text-2xl ${
          isTypeFree ? 'text-pure-white' : 'text-deep-night'
        }`}
      >
        {isTypeFree ? (
          'Free'
        ) : (
          <>
            $25.00
            <span className="text-base text-deep-night/60">/ month</span>
          </>
        )}
      </p>

      <ul className="flex flex-col gap-3">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className={`flex items-center gap-4 text-base ${
              isTypeFree ? 'text-pure-white' : 'text-deep-night'
            }`}
          >
            <CheckIcon color={isTypeFree ? '#3EE9E5' : '#093F68'} />

            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
