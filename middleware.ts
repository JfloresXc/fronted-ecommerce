import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('myToken')

  // Obtener la ruta de la solicitud
  const { pathname } = new URL(request.url)
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  if (!token) return NextResponse.redirect(new URL('/admin/login', request.url))

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
