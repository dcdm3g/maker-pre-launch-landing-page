import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Possibilities } from '@/components/Possibilities'

export default function Page() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-36 tablet:gap-28 desktop:gap-52">
        <Hero />

        <Possibilities />
      </main>
    </>
  )
}
