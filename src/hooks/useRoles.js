import { useError } from '@/hooks/useError'

export const useRoles = () => {
  const { tryCatch } = useError()
  //   const router = useRouter()

  const getAllRoles = async () => {
    return tryCatch(
      async () => {
        const URL = `/api/roles/getAll`
        const response = await fetch(URL)
        const data = await response.json()
        return data
      },
      (data) => {
        return data
      }
    )
  }

  return {
    getAllRoles,
  }
}
