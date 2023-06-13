'use client'

import { useAuth } from '@/hooks/useAuth'
import { Menu } from '@headlessui/react'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'

export default function ButtonLogout() {
  const { logout } = useAuth()

  const handleClick = async () => {
    await logout()
  }

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={handleClick}
          className={`${
            active ? 'bg-primary text-white' : 'text-gray-900'
          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
        >
          <ArrowLeftOnRectangleIcon
            className="mr-2 h-5 w-5"
            aria-hidden="true"
          />
          Cerrar sesión
        </button>
      )}
    </Menu.Item>
  )
}
