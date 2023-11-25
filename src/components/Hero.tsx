import Image from 'next/image'
import { HeroIllustrations } from './HeroIllustrations'
import scrollIcon from 'public/icon-scroll.svg'

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-12 overflow-x-hidden tablet:min-h-[22.5rem] desktop:min-h-[28.6875rem]">
      <HeroIllustrations />

      <div className="mx-6 flex flex-col items-center gap-6 tablet:mx-0 tablet:max-w-md desktop:max-w-[33.75rem]">
        <h1 className="mx-10 text-center text-xl/10 font-extrabold text-pure-white tablet:mx-8 desktop:mx-6 desktop:text-3xl">
          Get paid for the work you{' '}
          <span className="text-aqua-splash">love</span> to do.
        </h1>

        <p className="text-center text-base text-slate-gray">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>

        <Image
          className="mt-4 animate-bounce desktop:mt-12"
          src={scrollIcon}
          alt="Scroll down for more information."
        />
      </div>
    </section>
  )
}
