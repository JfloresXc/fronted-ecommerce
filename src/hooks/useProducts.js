import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useProducts = () => {
  const { handlerFetch, tryCatch } = useError()
  const router = useRouter()

  const getAllProducts = async () => {
    const url = `/api/products/getAll`
    const response = await handlerFetch({ url })
    const { data = [] } = response

    const newData = data.map((item) => ({
      ...item,
      nameCategory: item?.category?.name ?? '',
      price: parseFloat(item?.price).toFixed(2),
    }))
    return newData
  }

  const getActivedProducts = async () => {
    const url = `/api/products/getAll?state=1`
    const response = await handlerFetch({ url })
    const { data = [] } = response

    const newData = data.map((item) => ({
      ...item,
      nameCategory: item?.category?.name ?? '',
      price: parseFloat(item?.price).toFixed(2),
    }))
    return newData
  }

  const getOneProduct = async ({ id }) => {
    const url = `/api/products/getOne?id=${id}`
    const response = await handlerFetch({ url })
    const { data } = response
    return data
  }

  const getImagesForIdProduct = async ({ idProduct }) => {
    const url = `/api/products/imagesForIdProduct?id=${idProduct}`
    const response = await handlerFetch({ url })
    const { data } = response
    return data
  }

  const addNewProduct = async (body) => {
    const url = `/api/products/add`
    const { isError } = await handlerFetch({ url, body, method: 'POST' })
    if (isError) return

    setMessageSuccess({ message: '¡Producto agregado!' })
    router.push('/admin/products')
  }

  const addOneImage = async (formData) => {
    return tryCatch(
      async () => {
        const URL = `/api/upload`
        const response = await fetch(URL, {
          method: 'POST',
          body: formData,
        })
        const data = await response.json()
        return data
      },
      () => {
        setMessageSuccess({ message: '¡Imagen agregada!' })
      }
    )
  }

  const editProduct = async (id, body) => {
    const url = `/api/products/edit?id=${id}`
    const { isError } = await handlerFetch({
      url,
      body,
      method: 'PUT',
    })
    if (isError) return

    setMessageSuccess({ message: '¡Producto editado!' })
    router.push('/admin/products')
  }

  const deleteImageOfProduct = async ({ id }) => {
    const url = `/api/products/deleteImage?id=${id}`
    const { isError } = await handlerFetch({
      url,
      method: 'DELETE',
    })
    if (isError) return

    setMessageSuccess({ message: '¡Imagen eliminada!' })
  }

  return {
    getAllProducts,
    getActivedProducts,
    getOneProduct,
    getImagesForIdProduct,
    addNewProduct,
    addOneImage,
    editProduct,
    deleteImageOfProduct,
  }
}
