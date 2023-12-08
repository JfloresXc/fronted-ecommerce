import Image from 'next/image'
import Section from '../section'

export default function BannerDelivery() {
  return (
    <div className="w-full px-2 py-4 mb-1 flex justify-center align-center bg-light">
      <Section>
        <ul className="w-full flex flex-row flex-wrap gap-12">
          <li className="text-center flex-1 flex flex-col items-center  max-w-xs">
            <Image
              src={'/storage/garantia.webp'}
              alt="Garantia"
              width="50"
              height="50"
            />
            <h3 className="mt-3 font-bold">100% GARANTIA</h3>
            <p className="text-center text-sm m-0">
              La calidad de nuestros Productos esta garantizada por todos
              Nuestros Clientes
            </p>
          </li>
          <li className="text-center flex-1 flex flex-col items-center  max-w-xs">
            <Image
              src={'/storage/PAGOCONTRAENTREGA_x50.webp'}
              width="80"
              height="80"
              alt="Pago Contraentrega"
            />
            <h3 className="font-bold">PAGO CONTRAENTREGA</h3>
            <p className="text-center text-sm m-0">
              Pide tu producto con nosotros y Paga con Seguridad en tu Domicilio
            </p>
          </li>
          <li className="text-center flex-1 flex flex-col items-center max-w-xs">
            <Image
              src={'/storage/DELIVERY_x50.webp'}
              width="80"
              height="80"
              alt="Delivery"
            />
            <h3 className="font-bold">Delivery a Nivel Nacional</h3>
            <p className="text-center text-sm m-0">
              Envios a todo el Perú, por Olva Courier, Shalom, Marvisur o alguna
              agencia de su Preferencia
            </p>
          </li>
        </ul>
      </Section>
    </div>
  )
}
