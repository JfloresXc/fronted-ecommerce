import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function Pagination({ totalPages = 0 }) {
  const pages = Array.from({ length: totalPages })
  const searchParams = useSearchParams()
  const limit = searchParams.get('limit')

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
        {pages.map((page, index) => (
          <li key={index}>
            <Link
              href={`/search?page=${index + 1}&limit=${limit}`}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {index + 1}
            </Link>
          </li>
        ))}
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
