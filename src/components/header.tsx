import Image from 'next/image'
import logo from 'public/logo.svg'

export function Header() {
  return (
    <header className="flex justify-center tablet:justify-start tablet:px-10 desktop:px-40">
      <div className="relative aspect-[24/7] w-[7.5rem]">
        <Image src={logo} alt="Maker logo." fill />
      </div>
    </header>
  )
}
