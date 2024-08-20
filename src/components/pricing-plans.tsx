import { PricingPlan } from './pricing-plan'

export function PricingPlans() {
  return (
    <section className="mx-6 flex flex-col gap-20 tablet:mx-24 tablet:mt-7 desktop:mx-64 desktop:mt-0 desktop:gap-28">
      <div className="flex flex-col items-center gap-7 desktop:mx-48 desktop:gap-6">
        <h2 className="text-center text-[1.5rem] font-extrabold text-pure-white desktop:text-xl">
          Our pricing plans
        </h2>

        <p className="text-center text-base text-slate-gray">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
      </div>

      <div className="flex flex-col gap-16 tablet:mx-16 desktop:mx-0 desktop:flex-row desktop:items-center desktop:gap-8">
        <PricingPlan type="free" />

        <PricingPlan type="paid" />
      </div>
    </section>
  )
}
