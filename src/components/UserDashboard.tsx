'use client'

import { useUser } from '@/hooks/useUser'
import { DisasterInfo } from './DisasterInfo'
import { WeatherForecast } from './WeatherForecast'
import { ResourceAvailability } from './ResourceAvailability'
import { UserToUserSupport } from './UserToUserSupport'

export function UserDashboard() {
  const { user, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (!user) return null

  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-3xl font-semibold mb-6">User Dashboard</h2>
      <DisasterInfo />
      <WeatherForecast />
      <ResourceAvailability />
      <UserToUserSupport />
    </section>
  )
}

