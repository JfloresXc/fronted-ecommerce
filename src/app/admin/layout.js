'use client'

import AdminLayout from '@/components/layouts-own/AdminLayout'
import LoginLayout from '@/components/layouts-own/LoginLayout'
import AdminNavbar from '@/components/navbar/AdminNavbar'
import Section from '@/components/section'
import Sidebar from '@/components/sidebar/Sidebar'
import SidebarHidden from '@/components/sidebar/SidebarHidden'
import AuthContext from '@/contexts/AuthContext'
import { usePathname } from 'next/navigation'

export const metadata = {
  title: 'Socoro Home | Admin',
  description:
    'Administrador de Socoro Home. Gestiona los usuarios, los productos y las ordenes.',
}

function Content({ children }) {
  return (
    <div className="border-t border-b border-border-base">
      <div className="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
        <div className="pt-10 2xl:pt-12 pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 xl:max-w-screen-xl 2xl:max-w-[1300px] mx-auto">
          <div className="flex flex-col w-full lg:flex-row">
            <SidebarHidden />
            <Sidebar />
            <div className="w-full p-4 mt-4 border rounded-md lg:mt-0 border-border-base sm:p-5 lg:py-8 2xl:py-10 lg:px-7 2xl:px-12 overflow-x-auto">
              <Section>{children}</Section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LayoutAdminIndex({ children }) {
  const pathname = usePathname()

  if (pathname === '/admin/login') {
    return (
      <AuthContext>
        <LoginLayout>
          <AdminNavbar isLogin={true} />
          {children}
        </LoginLayout>
      </AuthContext>
    )
  }

  return (
    <AuthContext>
      <AdminLayout>
        <Content>{children}</Content>
      </AdminLayout>
    </AuthContext>
  )
}
