import { ReactNode } from 'react'
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from "@/lib/auth"
import { Sidebar } from "@/components/Sidebar"

interface DashboardLayoutProps {
  children: ReactNode
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-pattern">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <h1 className="mb-4 md:mb-6 text-white">SAVIOUR Dashboard</h1>
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

