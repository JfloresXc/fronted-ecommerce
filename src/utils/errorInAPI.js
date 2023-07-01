const MESSAGES = {
  ECONNREFUSED: '¡Error de conexión!',
}

export const handleErrorWithCause = (responseInJson, res) => {
  const { cause, message } = responseInJson

  const messageCode = MESSAGES[cause?.code] || message

  res.json({ isError: true, message: messageCode })
}

export const handleNewErrorWithCause = (responseInJson, res) => {
  const { cause, message } = responseInJson

  const messageCode = MESSAGES[cause?.code] || message

  return new Response(
    JSON.stringify({
      isError: true,
      message: messageCode,
    })
  )
}
