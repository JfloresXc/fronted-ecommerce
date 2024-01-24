'use client'

import SearchInput from '@/components/form/SearchInput'
import Brand from '@/components/brand'
import ListSocialIcons from '@/app/list-social-icons/ListSocialIcons'

export default function SearchNavbar() {
  return (
    <nav className="bg-slate-50 drop-shadow-sm sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 py-1 ">
        <div className="relative h-16 flex items-center justify-between">
          <div className="w-full flex items-center justify-between gap-5 h-16 py-3 top-bar lg:h-auto">
            <div className="max-w-[150px] md:max-w-[160px] w-full text-center">
              <Brand />
            </div>
            <SearchInput />
            <div className="block ml-auto mt-1.5">
              <ListSocialIcons />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
