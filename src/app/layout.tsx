import classNames from 'classnames'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'neotype',
  description: 'A next generation typing app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className,"bg-gray")}>{children}</body>
    </html>
  )
}
