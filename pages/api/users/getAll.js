import { getAll } from '@/utils/methodsInAPI'

export default async function handler(req, res) {
  return await getAll({ request: req, res, moduleRoute: 'user' })
}
