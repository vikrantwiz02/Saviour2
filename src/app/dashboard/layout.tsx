import { ReactNode } from 'react'
import { auth } from '@clerk/nextjs/server'
import { getUserRole } from '@/lib/clerk-mongodb'
import { redirect } from 'next/navigation'

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
          <a href="/dashboard" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Dashboard
          </a>
          <a href="/dashboard/profile" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Profile
          </a>
          <a href="/dashboard/alerts" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Alerts
          </a>
          <a href="/dashboard/community" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Community
          </a>
          <a href="/dashboard/emergency" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            Emergency
          </a>
          {userRole === 'admin' && (
            <a href="/admin/dashboard" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
              Admin Dashboard
            </a>
          )}
        </nav>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

