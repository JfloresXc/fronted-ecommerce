import { useContext } from 'react'
import { LoadingContext } from '@/contexts/LoadingContext'

export const useLoading = () => {
  const { loading, setLoading } = useContext(LoadingContext)

  const showLoading = () => setLoading(true)

  const hideLoading = () => setLoading(false)

  return {
    isLoading: Boolean(loading),
    showLoading,
    hideLoading,
  }
}
