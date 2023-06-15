import React from 'react'
import { SearchIcon } from '../icons'

export default function Search() {
  return (
    <div className="w-full transition-all duration-200 ease-in-out hidden lg:flex lg:max-w-[650px] 2xl:max-w-[800px] lg:ltr:ml-7 lg:rtl:mr-7 lg:ltr:mr-5 lg:rtl:ml-5">
      <div className="overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed input-focus-overlay-open"></div>
      <div className="relative z-30 flex flex-col justify-center w-full shrink-0">
        <div className="flex flex-col w-full mx-auto">
          <form className="relative flex w-full rounded-md" role="search">
            <label
              htmlFor="top-bar-search"
              className="flex flex-1 items-center py-0.5"
            >
              <input
                id="top-bar-search"
                className="px-5 text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm lg:text-15px rounded-md transition-all duration-200 focus:border-primary focus:ring-0 placeholder:text-brand-dark/50 border border-border-base"
                placeholder="Qué estas buscando..."
                name="search"
              />
            </label>
            <span className="absolute top-0 right-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none">
              <SearchIcon />
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}
