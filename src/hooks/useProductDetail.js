import { useError } from './useError'

export default function useProductDetail() {
  const { tryCatch } = useError()

  const getOneProductDetail = async ({ id }) => {
    return tryCatch(
      async () => {
        const URL = `/api/products/getOneActived?id=${id}`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  return { getOneProductDetail }
}
