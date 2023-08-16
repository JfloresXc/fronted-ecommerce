import { getOne } from '@/utils/methodsInAPI'

export default async function handler(request, res) {
  return getOne({ request, res, moduleRoute: 'category/state' })
}
