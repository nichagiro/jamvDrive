import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'

import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'

import Favicon from "@/app/favicon.png"
const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  authors: [{ name: 'Overweb', url: 'https://overweb.com.co' }],
  icons: Favicon.src
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es'>
      <body className={`${font.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
