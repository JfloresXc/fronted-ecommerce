import { useEffect, useState } from 'react'
import CardImage from '../products/CardImage'
import { useProducts } from '@/hooks/useProducts'

export default function ListImagesOfProduct({ idProduct }) {
  const [images, setImages] = useState([])
  const { getImagesForIdProduct, deleteImageOfProduct } = useProducts()

  useEffect(() => {
    getImages()
  }, [])

  const deleteImage = async ({ id }) => {
    await deleteImageOfProduct({ id })
    await getImages()
  }

  const getImages = async () => {
    getImagesForIdProduct({ idProduct }).then((data) => {
      setImages(data)
    })
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 scroll-smooth">
      {images.map(({ id, url, isPrincipal, fileName }, index) => (
        <CardImage
          key={index}
          url={url}
          fileName={fileName ?? `Imagen ${index + 1}`}
          isPreview={false}
          isPrincipal={isPrincipal}
          deleteImage={() => deleteImage({ id })}
        />
      ))}
    </div>
  )
}
