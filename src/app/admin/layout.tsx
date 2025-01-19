import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'admin') {
    redirect('/auth/admin-login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold">Admin Panel</h2>
        </div>
        <nav className="mt-4">
          <Link href="/admin/dashboard">
            <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
          </Link>
          <Link href="/admin/users">
            <Button variant="ghost" className="w-full justify-start">Users</Button>
          </Link>
          <Link href="/admin/alerts">
            <Button variant="ghost" className="w-full justify-start">Alerts</Button>
          </Link>
          <Link href="/admin/resources">
            <Button variant="ghost" className="w-full justify-start">Resources</Button>
          </Link>
          <Link href="/admin/settings">
            <Button variant="ghost" className="w-full justify-start">Settings</Button>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

