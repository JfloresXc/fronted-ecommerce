import React from 'react'
import BannerDelivery from '../banner/BannerDelivery'
import BannerFooter from '../banner/BannerFooter'

export default function Footer() {
  return (
    <footer className="bg-white pt-4">
      <BannerDelivery />
      <BannerFooter />
    </footer>
  )
}
