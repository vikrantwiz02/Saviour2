import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, Wind } from 'lucide-react'

export default function WeatherPage() {
  const forecast = [
    { day: 'Today', temp: 28, icon: Sun, description: 'Sunny' },
    { day: 'Tomorrow', temp: 24, icon: Cloud, description: 'Partly Cloudy' },
    { day: 'Wednesday', temp: 22, icon: CloudRain, description: 'Rain' },
    { day: 'Thursday', temp: 26, icon: Wind, description: 'Windy' },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Weather Forecast</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">4-Day Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {forecast.map((day) => (
                <div key={day.day} className="text-center">
                  <day.icon className="mx-auto mb-2 h-8 w-8" />
                  <h3 className="font-semibold">{day.day}</h3>
                  <p className="text-2xl font-bold">{day.temp}°C</p>
                  <p className="text-sm text-gray-500">{day.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Severe Weather Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <CloudRain className="mr-2 h-4 w-4 text-yellow-500" />
                  Heavy Rain Warning: 2:00 PM - 8:00 PM
                </li>
                <li className="flex items-center text-sm">
                  <Wind className="mr-2 h-4 w-4 text-orange-500" />
                  Strong Wind Advisory: 6:00 PM - 11:00 PM
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weather Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Weather Map Placeholder</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

