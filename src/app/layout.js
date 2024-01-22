import './globals.css'
import { Inter } from 'next/font/google'
import LoadingContext from '@/contexts/LoadingContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Socoro Home',
  description:
    'Somos una empresa dedicada a la venta de productos de ortopedia, rehabilitación y cuidado de la salud.',
}

function Content({ children }) {
  return (
    <>
      <header>
        <div id="portal-modal" className="z-20"></div>
        <div id="portal-loading" className="z-30"></div>
      </header>
      {children}
    </>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingContext>
          <Content>{children}</Content>
        </LoadingContext>
      </body>
    </html>
  )
}
