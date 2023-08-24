import Link from 'next/link'
import { useParamsFromQuery } from '@/hooks/useParamsFromQuery'

function ButtonPagination({ url, children, classes = '', isDisabled = false }) {
  return (
    <>
      <li>
        {!isDisabled ? (
          <Link
            href={url}
            className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 ${classes} hover:bg-gray-100 hover:text-gray-700`}
          >
            {children}
          </Link>
        ) : (
          <span
            href={url}
            className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-gray-100 border border-gray-300 ${classes} cursor-default`}
          >
            {children}
          </span>
        )}
      </li>
    </>
  )
}

export default function Pagination({ totalPages = 0, slug = 'search' }) {
  const pages = Array.from({ length: totalPages })
  const { searchtext, order, maxprice, page = 1 } = useParamsFromQuery()

  const getUrl = ({ page = 1 }) => {
    return `/${slug}?page=${page}&search_text=${searchtext}&order=${order}&maxprice=${maxprice}`
  }

  const firstUrl = getUrl({ page: 1 })
  const lastUrl = getUrl({ page: totalPages })
  const prevUrl = getUrl({ page: parseInt(page) - 1 })
  const nextUrl = getUrl({ page: parseInt(page) + 1 })
  // const currentPage = getUrl({ page: parseInt(page) })

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <ButtonPagination
          url={firstUrl}
          classes="rounded-l-lg"
          isDisabled={page <= 1}
        >
          {'<<'}
        </ButtonPagination>
        <ButtonPagination url={prevUrl} isDisabled={page <= 1}>
          {'<'}
        </ButtonPagination>
        {pages.map((pageKey, index) => {
          const url = `/${slug}?page=${
            index + 1
          }&search_text=${searchtext}&order=${order}&maxprice=${maxprice}`

          return (
            <li key={index}>
              <Link
                href={url}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 ${
                  index + 1 === page ? 'bg-gray-200' : 'bg-white'
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
              >
                {index + 1}
              </Link>
            </li>
          )
        })}
        <ButtonPagination url={nextUrl} isDisabled={page === totalPages}>
          {'>'}
        </ButtonPagination>
        <ButtonPagination
          url={lastUrl}
          classes="rounded-r-lg"
          isDisabled={page === totalPages}
        >
          {'>>'}
        </ButtonPagination>
      </ul>
    </nav>
  )
}
