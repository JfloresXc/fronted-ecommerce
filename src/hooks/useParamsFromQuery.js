const { useSearchParams } = require('next/navigation')

export const useParamsFromQuery = () => {
  const searchParams = useSearchParams()
  const searchtext = searchParams.get('search_text')
  const page = searchParams.get('page')
  const limit = searchParams.get('limit')
  const order = searchParams.get('order')

  return {
    searchtext: searchtext ?? '',
    page: page ?? 1,
    limit: limit ?? 12,
    order: order ?? '',
    searchParams,
  }
}
