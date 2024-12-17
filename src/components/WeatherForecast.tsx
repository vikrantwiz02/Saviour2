import { Cloud, Sun, CloudRain } from 'lucide-react'

export function WeatherForecast() {
  // Placeholder data
  const forecast = [
    { day: 'Mon', icon: Sun, temp: 28 },
    { day: 'Tue', icon: Cloud, temp: 24 },
    { day: 'Wed', icon: CloudRain, temp: 22 },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Weather Forecast</h2>
      <div className="flex justify-between">
        {forecast.map((day) => (
          <div key={day.day} className="text-center">
            <div>{day.day}</div>
            <day.icon className="h-8 w-8 mx-auto my-2" />
            <div>{day.temp}°C</div>
          </div>
        ))}
      </div>
    </div>
  )
}