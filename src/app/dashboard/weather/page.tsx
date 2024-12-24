import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from "@/lib/auth"
import { WeatherDisplay } from "@/components/WeatherDisplay"

export default async function WeatherPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Weather Information</h2>
      <WeatherDisplay />
    </div>
  )
}