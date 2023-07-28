import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Page() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-36 tablet:gap-28 desktop:gap-36">
        <Hero />
      </main>
    </>
  )
}
