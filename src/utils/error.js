import { setMessageError } from '@/utils/alerts'

export const handleError = (responseInJson) => {
  const { message = 'Error de conexion no mapeado', isError } = responseInJson

  if (isError) setMessageError({ message })

  return {
    isError,
  }
}
