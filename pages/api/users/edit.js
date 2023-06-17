import { editOne } from '@/utils/methodsInAPI'

export default async function handler(request, res) {
  return editOne({ request, res, moduleRoute: 'user' })
}
