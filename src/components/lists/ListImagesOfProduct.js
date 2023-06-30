import { useEffect, useState } from 'react'
import CardImage from '../products/CardImage'
import { useProducts } from '@/hooks/useProducts'

export default function ListImagesOfProduct({ idProduct }) {
  const [images, setImages] = useState([])
  const { getImagesForIdProduct } = useProducts()

  useEffect(() => {
    getImagesForIdProduct({ idProduct }).then((data) => {
      console.log(data)
      setImages(data)
    })
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 scroll-smooth">
      {images.map(({ url, isPrincipal }, index) => (
        <CardImage
          key={index}
          url={url}
          name={`Imagen ${index + 1}`}
          isPreview={false}
          isPrincipal={isPrincipal}
        />
      ))}
    </div>
  )
}
