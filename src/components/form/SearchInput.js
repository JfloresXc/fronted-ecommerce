import { useState } from 'react'
import { SearchIcon } from '../icons'
import { useRouter } from 'next/navigation'

export default function Search() {
  const [searchText, setSearchText] = useState('')
  const router = useRouter()

  const handleChange = (event) => {
    const { value } = event.target
    setSearchText(value)
  }

  const redirectToProducts = (searchText = '') => {
    router.push(`/store/search?search_text=${searchText}`)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    redirectToProducts(searchText)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[600px] w-full hidden sm:flex lg:mx-7 transition-all duration-200 ease-in-out"
    >
      <div className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 left-0 right-0 transition-all duration-300 fixed input-focus-overlay-open"></div>
      <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
        <div className="flex flex-col w-full mx-auto">
          <div className="relative flex w-full rounded-md" role="search">
            <label
              htmlFor="top-bar-search"
              className="flex flex-1 items-center py-0.5"
            >
              <input
                id="top-bar-search"
                className="text-heading outline-none w-full h-[40px] px-3 md:pl-6 pl-14bg-brand-light text-brand-dark text-sm lg:text-15px rounded-md transition-all duration-200 focus:border-primary focus:ring-0 placeholder:text-brand-dark/50 border border-border-base"
                placeholder="Qué estas buscando..."
                onChange={handleChange}
                name="search"
              />
            </label>
            <button>
              <span className="absolute top-0 right-0 flex items-center justify-center h-full w-14 md:w-16 shrink-0 focus:outline-none">
                <SearchIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
