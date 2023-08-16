import Link from 'next/link'
import { useParamsFromQuery } from '@/hooks/useParamsFromQuery'

export default function Pagination({ totalPages = 0, slug = 'search' }) {
  const pages = Array.from({ length: totalPages })
  const { searchtext, order } = useParamsFromQuery()

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <Link
            href="#"
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {'<'}
          </Link>
        </li>
        {pages.map((page, index) => {
          const url = `/${slug}?page=${
            index + 1
          }&search_text=${searchtext}&order=${order}`

          return (
            <li key={index}>
              <Link
                href={url}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {index + 1}
              </Link>
            </li>
          )
        })}
        <li>
          <Link
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {'>'}
          </Link>
        </li>
      </ul>
    </nav>
  )
}
