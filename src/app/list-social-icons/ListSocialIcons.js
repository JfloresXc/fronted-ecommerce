import FacebookIcon from '@/components/icons/Facebook'
import InstagramIcon from '@/components/icons/Instagram'
import TwitterIcon from '@/components/icons/Twitter'
import YoutubeIcon from '@/components/icons/Youtube'
import React from 'react'

export default function ListSocialIcons() {
  return (
    <ul className="flex justify-center sm:justify-start gap-x-6">
      <li className="transition hover:opacity-80">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/redqinc/"
        >
          <FacebookIcon />
        </a>
      </li>
      <li className="transition hover:opacity-80">
        <a target="_blank" rel="noreferrer" href="https://twitter.com/redqinc">
          <TwitterIcon />
        </a>
      </li>
      <li className="transition hover:opacity-80">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/redqinc/"
        >
          <InstagramIcon />
        </a>
      </li>
      <li className="transition hover:opacity-80">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw"
        >
          <YoutubeIcon />
        </a>
      </li>
    </ul>
  )
}
