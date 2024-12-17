import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from "@/lib/auth"
import DashboardLayout from "@/components/DashboardLayout"
import { RealTimeAlerts } from "@/components/RealTimeAlerts"
import { NavigationAssistance } from "@/components/NavigationAssistance"
import { ResourceAvailability } from "@/components/ResourceAvailability"
import { WeatherForecast } from "@/components/WeatherForecast"
import CommunitySupport from "@/components/CommunitySupport"
import EmergencyContacts from "@/components/EmergencyContacts"
import UserProfile from "@/components/UserProfile"
import NotificationSettings from "@/components/NotificationSettings"
import HistoricalData from "@/components/HIstoricalData"
import DetailedResourceManagement from "@/components/DetailedResourceManagement"
import LocalNews from "@/components/LocalNews"

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UserProfile />
        <RealTimeAlerts />
        <NavigationAssistance />
        <ResourceAvailability />
        <WeatherForecast />
        <CommunitySupport />
        <EmergencyContacts />
        <NotificationSettings />
        <HistoricalData />
        <DetailedResourceManagement />
        <LocalNews />
      </div>
    </DashboardLayout>
  )
}

