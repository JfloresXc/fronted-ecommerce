import { useError } from './useError'

export default function useProductDetail() {
  const { handlerFetch } = useError()

  const getOneProductDetail = async ({ id }) => {
    const url = `/api/products/getOneActived?id=${id}`
    const response = await handlerFetch({ url })
    const { data } = response
    return data
  }

  return { getOneProductDetail }
}
