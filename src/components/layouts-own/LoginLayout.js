import BannerTop from '../banner/BannerTop'
import { PortalLoading } from '../portal/PortalLoading'
import Spinner from '../spinner'
import ButtonWhatsApp from '../button/ButtonWhatsApp'
import Footer from '../footer'

export default function LoginLayout({ children }) {
  return (
    <>
      <BannerTop />
      <main className="min-h-screen bg-white">
        {children}
        <PortalLoading>
          <Spinner />
        </PortalLoading>
      </main>
      <footer className="bg-slate-50">
        <ButtonWhatsApp />
        <Footer />
      </footer>
    </>
  )
}
