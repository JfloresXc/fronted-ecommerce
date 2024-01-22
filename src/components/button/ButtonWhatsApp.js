import { WhatsAppIcon } from '../icons'

function Button() {
  return (
    <button
      type="button"
      className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-primary hover:bg-secondary"
    >
      <WhatsAppIcon />
    </button>
  )
}

export default function ButtonWhatsApp() {
  const LINK_WHATSAPP = process.env.LINK_WHATSAPP

  return (
    <>
      <div className="fixed bottom-14 right-6 z-10">
        <a
          className="p-2.5"
          target="_blank"
          href={`https://${LINK_WHATSAPP}`}
          rel="noopener noreferrer"
        >
          <Button />
        </a>
      </div>
    </>
  )
}
