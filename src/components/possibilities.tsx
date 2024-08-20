import Image from 'next/image'
import { Possibility } from './possibility'
import passionsIllustration from 'public/illustration-passions.svg'
import financialFreedomIllustration from 'public/illustration-financial-freedom.svg'
import lifestyleIllustration from 'public/illustration-lifestyle.svg'
import workAnywhereIllustration from 'public/illustration-work-anywhere.svg'

export function Possibilities() {
  return (
    <section className="mx-6 tablet:mx-24 desktop:mx-40">
      <ul className="flex flex-col gap-14 tablet:gap-10 desktop:flex-row desktop:gap-8">
        <li className="tablet:ml-14 tablet:self-end desktop:ml-0 desktop:self-auto">
          <Possibility
            illustration={
              <div className="relative aspect-[44/53] w-[4.375rem] desktop:w-[5.5rem]">
                <Image src={passionsIllustration} alt="" fill />
              </div>
            }
            title="Indulge your passions"
            description="Your passions shouldn't be just for the weekend. Earn a living doing what you love."
          />
        </li>

        <li className="tablet:mr-14 desktop:mr-0 desktop:mt-12">
          <Possibility
            illustration={
              <div className="relative aspect-[74/89] w-14 desktop:w-[4.625rem]">
                <Image src={financialFreedomIllustration} alt="" fill />
              </div>
            }
            title="Gain financial freedom"
            description="Start making money work for you. There’s nothing quite like earning while you sleep."
          />
        </li>

        <li className="tablet:ml-14 tablet:self-end desktop:ml-0 desktop:self-auto">
          <Possibility
            illustration={
              <div className="relative aspect-[40/47] w-16 desktop:w-20">
                <Image src={lifestyleIllustration} alt="" fill />
              </div>
            }
            title="Choose your lifestyle"
            description="Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week."
          />
        </li>

        <li className="tablet:mr-14 desktop:mr-0 desktop:mt-12">
          <Possibility
            illustration={
              <div className="relative aspect-[52/37] w-20 desktop:w-[6.5rem]">
                <Image src={workAnywhereIllustration} alt="" fill />
              </div>
            }
            title="Work from anywhere"
            description="Selling online means not being pinned down. Want to work AND travel? Go for it!"
          />
        </li>
      </ul>
    </section>
  )
}
