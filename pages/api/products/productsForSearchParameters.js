import { getAll } from '@/utils/methodsInAPI'

export default async function handler(req, res) {
  const { searchtext, page, limit } = req.query
  return await getAll({
    request: req,
    res,
    moduleRoute: `product/search?searchtext=${searchtext}&page=${page}&limit=${limit}`,
  })
}
