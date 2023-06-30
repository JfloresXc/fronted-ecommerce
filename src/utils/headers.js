export const getHeadersFromAPI = (request) => {
  const { myToken: token } = request.cookies

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }

  const headersWithFile = {
    Authorization: `Bearer ${token}`,
  }

  return { headers, headersWithFile }
}

export const HEADERS_IN_CLIENT = { 'Content-Type': 'application/json' }
