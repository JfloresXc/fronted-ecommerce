import BannerTop from '../banner/BannerTop'
import SearchNavbar from '../navbar/SearchNavbar'
import { PortalLoading } from '../portal/PortalLoading'
import Spinner from '../spinner'
import ButtonWhatsApp from '../button/ButtonWhatsApp'
import Cart from '../cart/Cart'
import Footer from '../footer'
import CollectionsNavbar from '../navbar/CollectionsNavbar'

export default function StoreLayout({ children }) {
  return (
    <>
      <BannerTop />
      <SearchNavbar />
      <CollectionsNavbar />
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
      </footer>
    </>
  )
}
