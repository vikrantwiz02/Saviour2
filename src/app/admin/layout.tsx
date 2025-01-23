import { isAdmin } from '@/lib/clerk-mongodb'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adminStatus = await isAdmin()

  if (!adminStatus) {
    redirect('/')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <a
            href="/admin/dashboard"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Dashboard
          </a>
          <a
            href="/admin/users"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Users
          </a>
          <a
            href="/admin/content"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Content
          </a>
          <a
            href="/admin/settings"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-200"
          >
            Settings
          </a>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  )
}

