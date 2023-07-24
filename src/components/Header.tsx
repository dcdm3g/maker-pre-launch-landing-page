import Image from 'next/image'
import logo from 'public/logo.svg'

export function Header() {
  return (
    <header className="flex justify-center tablet:justify-start tablet:px-10 desktop:px-40">
      <Image
        src={logo}
        alt="Maker logo, consisting of two partially overlapping cyan circles and the Maker name next to it."
      />
    </header>
  )
}
