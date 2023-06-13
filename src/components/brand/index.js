import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ size = 200 }) {
  return (
    <>
      <Link href="/">
        <Image
          alt="BoroBazar"
          loading="eager"
          width="200"
          height="30"
          decoding="async"
          data-nimg="1"
          src="https://borobazar.vercel.app/_next/static/media/logo.026129ac.svg"
        />
      </Link>
    </>
  )
}
