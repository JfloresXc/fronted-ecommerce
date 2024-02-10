import FacebookIcon from '@/components/icons/Facebook'
import InstagramIcon from '@/components/icons/Instagram'
import TiktokIcon from '@/components/icons/Tiktok'
import WhatsAppIcon from '@/components/icons/WhatsApp'
import React from 'react'

export default function ListSocialIcons() {
  return (
    <ul className="flex justify-center sm:justify-start gap-x-6">
      <li className="transition hover:opacity-80">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/socorohome/"
        >
          <FacebookIcon />
        </a>
      </li>
      <li className="transition hover:opacity-80">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.tiktok.com/@socorohome"
        >
          <TiktokIcon />
        </a>
      </li>
      <li className="transition hover:opacity-80">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/socorohome/"
        >
          <InstagramIcon />
        </a>
      </li>
      <li className="transition hover:opacity-80">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://api.whatsapp.com/send?phone=51929068827&text=Hola%20Socoro%20Home%2C%20tengo%20una%20consulta%F0%9F%98%8A"
        >
          <WhatsAppIcon />
        </a>
      </li>
    </ul>
  )
}
