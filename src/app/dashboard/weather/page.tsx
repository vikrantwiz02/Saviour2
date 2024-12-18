import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, Wind, Thermometer, Droplets, Compass } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export default function WeatherPage() {
  const forecast = [
    { day: 'Today', temp: 28, icon: Sun, description: 'Sunny' },
    { day: 'Tomorrow', temp: 24, icon: Cloud, description: 'Partly Cloudy' },
    { day: 'Wednesday', temp: 22, icon: CloudRain, description: 'Rain' },
    { day: 'Thursday', temp: 26, icon: Wind, description: 'Windy' },
  ]

  const currentConditions = [
    { label: 'Temperature', value: '28°C', icon: Thermometer },
    { label: 'Humidity', value: '65%', icon: Droplets },
    { label: 'Wind Speed', value: '15 km/h', icon: Wind },
    { label: 'Wind Direction', value: 'NE', icon: Compass },
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
              <CardTitle className="text-lg">Current Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {currentConditions.map((condition) => (
                  <div key={condition.label} className="flex items-center">
                    <condition.icon className="h-5 w-5 mr-2 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500">{condition.label}</p>
                      <p className="font-semibold">{condition.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Severe Weather Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CloudRain className="mr-2 h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Heavy Rain Warning</span>
                  </div>
                  <Badge>2:00 PM - 8:00 PM</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Wind className="mr-2 h-4 w-4 text-orange-500" />
                    <span className="text-sm">Strong Wind Advisory</span>
                  </div>
                  <Badge>6:00 PM - 11:00 PM</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Weather Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <Cloud className="h-12 w-12 text-gray-400" />
              <span className="ml-2 text-gray-600">Weather Map Placeholder</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

