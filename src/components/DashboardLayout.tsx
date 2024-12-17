import { ReactNode } from 'react'
import { Sidebar } from "@/components/Sidebar"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gradient-pattern">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">SAVIOUR Dashboard</h1>
        {children}
      </div>
    </div>
  )
}

