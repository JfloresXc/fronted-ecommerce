import './globals.css'
import { Inter } from 'next/font/google'
import ButtonWhatsApp from '@/components/button/ButtonWhatsApp'
import AuthContext from '@/contexts/AuthContext'
import LoadingContext from '@/contexts/LoadingContext'
import CartContext from '@/contexts/CartContext'
import { PortalLoading } from '@/components/portal/PortalLoading'
import Spinner from '@/components/spinner'
import Navbar from '@/components/navbar/Navbar'
import BannerTop from '@/components/banner/BannerTop'
import FilteredProductsContext from '@/contexts/FilteredProductsContext'
import Footer from '@/components/footer'
import Cart from '@/components/cart/Cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Diomedic',
  description:
    'Somos una empresa dedicada a la venta de productos de ortopedia, rehabilitación y cuidado de la salud.',
}

function Content({ children }) {
  return (
    <>
      <header className="bg-slate-50">
        <BannerTop />
        <Navbar />
      </header>
      <main className="min-h-screen bg-white">
        {children}
        <PortalLoading>
          <Spinner />
        </PortalLoading>
      </main>
      <footer className="bg-slate-50">
        <ButtonWhatsApp />
        <Cart />
        <Footer />
        <div id="portal-modal" className="z-20"></div>
        <div id="portal-loading" className="z-30"></div>
      </footer>
    </>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingContext>
          <AuthContext>
            <CartContext>
              <FilteredProductsContext>
                <Content>{children}</Content>
              </FilteredProductsContext>
            </CartContext>
          </AuthContext>
        </LoadingContext>
      </body>
    </html>
  )
}
