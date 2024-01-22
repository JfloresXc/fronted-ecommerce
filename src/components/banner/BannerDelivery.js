import Image from 'next/image'

export default function BannerDelivery() {
  const INFORMATION = [
    {
      title: '100% Garantía',
      description:
        'La calidad de nuestros Productos esta garantizada por todos Nuestros Clientes',
      image: '/storage/garantia.webp',
      width: 50,
      height: 50,
    },
    {
      title: 'Pago Contraentrega',
      description:
        'Pide tu producto con nosotros y Paga con Seguridad en tu Domicilio',
      image: '/storage/PAGOCONTRAENTREGA_x50.png',
      width: 100,
      height: 100,
    },
    {
      title: 'Delivery a Nivel Nacional',
      description:
        'Envios a todo el Perú, por Olva Courier, Shalom, Marvisur o alguna agencia de su Preferencia',
      image: '/storage/DELIVERY_x50.png',
      width: 150,
      height: 150,
    },
  ]

  return (
    <div
      className="w-full px-2 py-8 mb-1 
    flex justify-center align-center flex-wrap 
    bg-gray-100"
    >
      <ul
        className="max-w-[1000px] w-full 
      flex flex-row justify-center md:justify-between items-center flex-wrap gap-x-12"
      >
        {INFORMATION.map((item, index) => (
          <li
            key={index}
            className="text-center flex-1 flex flex-col items-center gap-y-3 min-w-[150px] max-w-[250px] md:max-w-[350px]"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={item.width}
              height={item.height}
            />
            <h3 className="mt-3 font-bold text-sm md:text-base">
              {item.title}
            </h3>
            <p className="text-center text-xs md:text-sm m-0 leading-5 md:leading-6">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
