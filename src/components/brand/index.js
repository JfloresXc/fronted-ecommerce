import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ size = 200 }) {
  return (
    <>
      <Link href="/">
        <Image
          src="/storage/socorohome-logo.jpg"
          alt="Logo Socoro Home"
          width="300"
          height="300"
          className="brand"
          quality={75}
        />
      </Link>
    </>
  )
}
