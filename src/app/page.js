import Section from '@/components/section'
import Image from 'next/image'

export default function Home() {
  return (
    <Section>
      <div className="w-full z-10">
        <Image
          src="/storage/farmacia.jpg" // Ruta relativa a /public
          alt="Hero Image"
          width={1200}
          height={300}
        />
      </div>
    </Section>
  )
}
