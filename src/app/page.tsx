import { MotionConfig } from '@/lib/framer-motion'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Possibilities } from '@/components/Possibilities'
import { PricingPlans } from '@/components/PricingPlans'
import { Footer } from '@/components/Footer'

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
