import { GetNotifiedForm } from './get-notified-form'

export function Footer() {
  return (
    <footer className="mt-20 flex min-h-[5rem] flex-col items-center gap-8 overflow-x-hidden bg-footer-squiggle bg-[length:36.5rem] bg-top bg-no-repeat px-6 tablet:mt-10 tablet:min-h-[8.75rem] tablet:gap-7 tablet:bg-[length:63.875rem] tablet:px-36 tablet:py-4 desktop:mt-14 desktop:min-h-[14.25rem] desktop:gap-10 desktop:bg-[length:104.0625rem] desktop:px-[22rem] desktop:pb-11 desktop:pt-[3.25rem]">
      <h2 className="text-center text-[1.5rem] font-extrabold leading-8 text-pure-white tablet:ml-[4.5rem] tablet:mr-[4.25rem] desktop:mx-0 desktop:text-xl">
        Get notified when we launch
      </h2>

      <GetNotifiedForm />
    </footer>
  )
}
