import { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: 'Maker Pre-launch',
  description: 'Get paid for the work you love to do.',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
