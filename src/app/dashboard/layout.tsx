import { ReactNode } from 'react'
import { auth } from '@clerk/nextjs/server'
import { getUserRole } from '@/lib/clerk-mongodb'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/sign-in')
  }

  const userRole = await getUserRole(userId)

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <Link href="/dashboard" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Dashboard
          </Link>
          <Link href="/dashboard/profile" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Profile
          </Link>
          <Link href="/dashboard/alerts" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Alerts
          </Link>
          <Link href="/dashboard/community" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Community
          </Link>
          <Link href="/dashboard/emergency" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Emergency
          </Link>
          <Link href="/dashboard/weather" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Weather
          </Link>
          {userRole === 'admin' && (
            <Link href="/admin/dashboard" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
              Admin Dashboard
            </Link>
          )}
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

