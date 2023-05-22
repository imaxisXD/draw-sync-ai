import './globals.css'
import Nav from '@/components/navbar'
import clsx from 'clsx'
import { satoshi, inter } from '@/styles/fonts'
import Footer from '@/components/footer'

export const metadata = {
  title: 'DrawSyncAI',
  description: 'Create AI image by your own drawing or your friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(satoshi.variable, inter.variable, 'flex min-h-screen flex-col justify-between')}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
