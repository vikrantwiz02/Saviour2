import DashboardLayout from "@/components/DashboardLayout"
import { WeatherForecast } from "@/components/WeatherForecast"

export default function WeatherPage() {
  return (
    <DashboardLayout>
      <WeatherForecast />
    </DashboardLayout>
  )
}

