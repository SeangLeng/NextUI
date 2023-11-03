import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './provider'
import NavbarKQuick from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Testing UI',
  description: 'Modified by seangleng',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Provider>
          <NavbarKQuick />
          {children}
        </Provider>

      </body>

    </html>
  )
}
