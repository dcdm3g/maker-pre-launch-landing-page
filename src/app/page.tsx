import { MotionConfig } from '@/lib/framer-motion'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Possibilities } from '@/components/possibilities'
import { PricingPlans } from '@/components/pricing-plans'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <MotionConfig
      transition={{ type: 'spring', bounce: 0.4 }}
      reducedMotion="user"
    >
      <Header />

      <main className="flex flex-col gap-36 tablet:gap-28 desktop:gap-52">
        <Hero />

        <Possibilities />

        <PricingPlans />
      </main>

      <Footer />
    </MotionConfig>
  )
}
