import Image from 'next/image'
import Link from 'next/link'

export default function Brand({ size = 200 }) {
  return (
    <>
      <Link href="/">
        <Image
          src="/storage/logoDiomedic.jpg"
          alt="BoroBazar"
          width="200"
          height="200"
          className="brand"
          quality={75}
        />
      </Link>
    </>
  )
}
