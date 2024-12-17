import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain, Wind } from 'lucide-react'

export function WeatherForecast() {
  const forecast = [
    { day: 'Today', temp: 28, icon: Sun, description: 'Sunny' },
    { day: 'Tomorrow', temp: 24, icon: Cloud, description: 'Partly Cloudy' },
    { day: 'Wednesday', temp: 22, icon: CloudRain, description: 'Rain' },
    { day: 'Thursday', temp: 26, icon: Wind, description: 'Windy' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Weather Forecast</h2>
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>4-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {forecast.map((day) => (
              <div key={day.day} className="text-center">
                <day.icon className="mx-auto mb-2" />
                <h3 className="font-semibold">{day.day}</h3>
                <p className="text-2xl font-bold">{day.temp}°C</p>
                <p className="text-sm text-gray-500">{day.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

