import React from 'react'
import AdminNavbar from '../navbar/AdminNavbar'
import { PortalLoading } from '../portal/PortalLoading'
import Spinner from '../spinner'
import Footer from '../footer'

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-white">
        {children}
        <PortalLoading>
          <Spinner />
        </PortalLoading>
      </main>
      <footer className="bg-slate-50">
        <Footer />
      </footer>
    </>
  )
}
