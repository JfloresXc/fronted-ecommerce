import { API_URL_SERVER_BACKEND } from '@/settings/envs'
import { getHeadersFromAPI } from './headers'
import { handleErrorWithCause } from './errorInAPI'

const getAll = async function handler({ request, res, moduleRoute }) {
  try {
    const { headers } = getHeadersFromAPI(request)
    const state = request.query.state

    let query = ''
    if (state) query = `state=${state}`

    const url = `${API_URL_SERVER_BACKEND}/${moduleRoute}?${query}`
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })
    const data = await response.json()

    res.json(data)
  } catch (error) {
    handleErrorWithCause(error, res)
  }
}

const getOne = async function handler({ request, res, moduleRoute }) {
  try {
    const { headers } = getHeadersFromAPI(request)
    const id = request.query.id

    const url = `${API_URL_SERVER_BACKEND}/${moduleRoute}/${id}`
    const response = await fetch(url, {
      method: 'GET',
      headers,
    })
    const data = await response.json()

    res.json(data)
  } catch (error) {
    handleErrorWithCause(error, res)
  }
}

const addOne = async function handler({ request, res, moduleRoute }) {
  try {
    const { headers } = getHeadersFromAPI(request)
    const body = request.body

    const url = `${API_URL_SERVER_BACKEND}/${moduleRoute}`
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })
    const data = await response.json()

    res.json(data)
  } catch (error) {
    handleErrorWithCause(error, res)
  }
}

const editOne = async function handler({ request, res, moduleRoute }) {
  try {
    const { headers } = getHeadersFromAPI(request)
    const id = request.query.id
    const body = request.body

    const url = `${API_URL_SERVER_BACKEND}/${moduleRoute}/${id}`
    const response = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body),
    })
    const data = await response.json()

    res.json(data)
  } catch (error) {
    handleErrorWithCause(error, res)
  }
}

export { getAll, getOne, addOne, editOne }
