import { useEffect, useState } from 'react'
import { DEFAULT_PARAMS } from '@/utils/paramsDefault'
const { urlImgDefault } = DEFAULT_PARAMS

export default function Galery({ images = [] }) {
  const [image, setImage] = useState(null)

  useEffect(() => {
    if (images?.length > 0 && !image) return setImage(images[0])
  }, [images])

  return (
    <div className="w-full xl:flex xl:gap-4 xl:flex-row-reverse">
      <div className="w-full md:w-[400px] md:h-[400px] flex justify-center p-1 border rounded-lg mb-4">
        <img
          className="w-full h-full max-w-lg max-h-96 object-cover object-center rounded-lg"
          src={image?.url ?? urlImgDefault}
          alt="imagen"
        />
      </div>
      <div className=" xl:w-[150px] 2xl:w-[170px]">
        <div className="flex xl:flex-col flex-row gap-4">
          {images.map((imageKey, index) => (
            <div
              key={index}
              className="flex items-center justify-center overflow-hidden transition border rounded-lg cursor-pointer border-border-base hover:opacity-75 p-1
              h-20 w-20 xl:h-24 xl:w-24 2xl:h-28 2xl:w-28"
            >
              <img
                className="w-full h-full object-cover object-center"
                src={imageKey?.url ?? urlImgDefault}
                alt={imageKey?.fileName ?? ''}
                onClick={() => setImage(imageKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
