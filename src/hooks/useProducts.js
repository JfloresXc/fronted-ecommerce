import { useError } from '@/hooks/useError'
import { setMessageSuccess } from '@/utils/alerts'
import { useRouter } from 'next/navigation'

export const useProducts = () => {
  const { tryCatch } = useError()
  const router = useRouter()

  const getAllProducts = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/products/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        const newData = data.map((item) => ({
          ...item,
          nameCategory: item?.category?.name ?? '',
          price: parseFloat(item?.price).toFixed(2),
        }))
        return newData
      }
    )
  }

  const getActivedProducts = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/products/getAll?state=1`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        const newData = data.map((item) => ({
          ...item,
          nameCategory: item?.category?.name ?? '',
          price: parseFloat(item?.price).toFixed(2),
        }))
        console.log(newData)
        return newData
      }
    )
  }

  const getOneProduct = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/getOne?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const getImagesForIdProduct = async ({ idProduct }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/imagesForIdProduct?id=${idProduct}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  const addNewProduct = async (body) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/add`
        const response = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
      },
      () => {
        setMessageSuccess({ message: '¡Producto agregado!' })
        router.push('/admin/products')
      }
    )
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
      (data) => {
        setMessageSuccess({ message: '¡Imagen agregada!' })
      }
    )
  }

  const editProduct = async (id, body) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/edit?id=${id}`
        const response = await fetch(URL, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        const data = await response.json()
        return data
      },
      () => {
        setMessageSuccess({ message: '¡Producto editado!' })
        router.push('/admin/products')
      }
    )
  }

  const deleteImageOfProduct = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/deleteImage?id=${id}`
        const response = await fetch(URL, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        const data = await response.json()
        return data
      },
      () => {
        setMessageSuccess({ message: '¡Imagen eliminada!' })
      }
    )
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
