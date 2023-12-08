import Section from '../section'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export default function BannerFooter() {
  return (
    <div className="w-full py-4 mb-1 bg-primary text-white">
      <Section>
        <ul className="w-full flex flex-row flex-wrap gap-12 px-6 ">
          <li className=" flex-1 flex flex-col max-w-xs gap-4">
            <h3 className="mt-3 font-bold text-2xl ">Acerca de Nosotros</h3>
            <p className="text-sm">Puedes contactarnos en los siguientes</p>
            <p className="text-sm flex gap-3">
              <EnvelopeIcon width={'18'} /> mybonlineshopping@gmail.com
            </p>
            <p className="text-sm flex gap-3">
              <PhoneIcon width={'18'} /> 912 841 209
            </p>
          </li>
        </ul>
      </Section>
    </div>
  )
}
