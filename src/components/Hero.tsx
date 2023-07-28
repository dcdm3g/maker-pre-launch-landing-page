import Image from 'next/image'
import heroLeftIllustration from 'public/illustration-hero-left.svg'
import heroBgSquiggle from 'public/bg-hero-squiggle.svg'
import heroRightIllustration from 'public/illustration-hero-right.svg'
import scrollIcon from 'public/icon-scroll.svg'

export function Hero() {
  return (
    <section className="relative flex flex-col gap-12">
      <div className="flex items-center justify-center overflow-x-hidden tablet:gap-11 desktop:gap-24">
        <Image
          className="w-52 tablet:w-80 desktop:w-auto"
          src={heroLeftIllustration}
          alt=""
          priority
        />

        <Image
          className="hidden w-96 tablet:inline desktop:mb-4 desktop:w-auto desktop:self-start"
          src={heroBgSquiggle}
          alt=""
        />

        <Image
          className="w-52 tablet:w-80 desktop:ml-3 desktop:w-auto"
          src={heroRightIllustration}
          alt=""
        />
      </div>

      <div className="flex flex-col items-center gap-6 px-6 tablet:absolute tablet:left-1/2 tablet:top-1/2 tablet:w-max tablet:max-w-md tablet:-translate-x-1/2 tablet:-translate-y-1/2 tablet:px-0 desktop:max-w-[33.75rem]">
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
          className="mt-2 desktop:mt-10"
          src={scrollIcon}
          alt="Scroll down for more information."
        />
      </div>
    </section>
  )
}
