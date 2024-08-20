import Image from 'next/image'
import heroLeftIllustration from 'public/illustration-hero-left.svg'
import heroBgSquiggle from 'public/bg-hero-squiggle.svg'
import heroRightIllustration from 'public/illustration-hero-right.svg'

export function HeroIllustrations() {
  return (
    <div className="flex items-center tablet:absolute tablet:-z-10 tablet:gap-11 desktop:gap-24">
      <div className="relative aspect-[8/9] w-52 tablet:w-80 desktop:w-[25.5rem]">
        <Image src={heroLeftIllustration} alt="" fill priority />
      </div>

      <div className="relative hidden aspect-[545/379] w-96 tablet:block desktop:mb-4 desktop:w-[34.0625rem] desktop:self-start">
        <Image src={heroBgSquiggle} alt="" fill />
      </div>

      <div className="relative aspect-[33/37] w-52 tablet:w-80 desktop:ml-3 desktop:w-[24.75rem]">
        <Image src={heroRightIllustration} alt="" fill />
      </div>
    </div>
  )
}
