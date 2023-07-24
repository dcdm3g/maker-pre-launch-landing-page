import { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Maker Pre-launch',
  description: 'Get paid for the work you love to do.',
}

const manrope = Manrope({
  subsets: ['latin'],
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} flex flex-col gap-16 bg-deep-night pb-40 pt-10 tablet:gap-20 tablet:pb-28 tablet:pt-12 desktop:gap-24 desktop:pt-20`}
      >
        {children}
      </body>
    </html>
  )
}
