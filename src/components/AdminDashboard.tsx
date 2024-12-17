'use client'

import { useUser } from '@/hooks/useUser'
import { UserManagement } from './admin/UserManagement'
import { VisitorSiteUpdates } from './admin/VisitorSiteUpdates'
import { ResourceDatabase } from './admin/ResourceDatabase'

export function AdminDashboard() {
  const { user, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (!user) return null

  // Since we don't have a role property, let's assume all logged-in users can access the admin dashboard
  // In a real application, you'd want to implement proper role-based access control

  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-3xl font-semibold mb-6">Admin Dashboard</h2>
      <UserManagement />
      <VisitorSiteUpdates />
      <ResourceDatabase />
    </section>
  )
}

