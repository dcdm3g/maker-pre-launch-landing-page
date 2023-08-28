import { ReactNode } from 'react'

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
    <div className="flex flex-col items-center gap-8 tablet:flex-row tablet:gap-14 desktop:flex-col desktop:items-start desktop:gap-12">
      <div className="flex h-32 w-32 items-center justify-center rounded-[2.8125rem] bg-midnight-navy desktop:h-40 desktop:w-40">
        {illustration}
      </div>

      <div className="flex flex-col items-center gap-3 tablet:items-start desktop:gap-6">
        <h3 className="text-center text-lg text-pure-white tablet:text-start">
          {title}
        </h3>

        <p className="text-center text-base text-slate-gray tablet:text-start">
          {description}
        </p>
      </div>
    </div>
  )
}
