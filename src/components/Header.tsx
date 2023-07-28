import Image from 'next/image'
import logo from 'public/logo.svg'

export function Header() {
  return (
    <header className="flex justify-center tablet:justify-start tablet:px-10 desktop:px-40">
      <Image src={logo} alt="Maker logo." />
    </header>
  )
}
