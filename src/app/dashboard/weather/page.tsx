import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sun, Cloud, CloudRain, Wind, Thermometer, Droplets, Compass, AlertTriangle, MapPin } from 'lucide-react'

async function getWeatherData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/weather`, { cache: 'no-store' })
  if (!res.ok) {
    throw new Error('Failed to fetch weather data')
  }
  return res.json()
}

export default async function WeatherPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  const weatherData = await getWeatherData()
  const current = weatherData.current
  const forecast = weatherData.forecast.list.slice(0, 4) // Get next 4 forecasts

  const getWeatherIcon = (iconCode: string) => {
    switch (iconCode) {
      case '01d': case '01n': return Sun
      case '02d': case '02n': case '03d': case '03n': case '04d': case '04n': return Cloud
      case '09d': case '09n': case '10d': case '10n': return CloudRain
      case '11d': case '11n': return AlertTriangle
      default: return Cloud
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Weather Forecast</h2>
        <Button variant="outline">
          <MapPin className="mr-2 h-4 w-4" />
          {current.name}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Current Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <Thermometer className="h-5 w-5 mr-2 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Temperature</p>
                <p className="font-semibold">{Math.round(current.main.temp)}°C</p>
              </div>
            </div>
            <div className="flex items-center">
              <Droplets className="h-5 w-5 mr-2 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Humidity</p>
                <p className="font-semibold">{current.main.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="h-5 w-5 mr-2 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Wind Speed</p>
                <p className="font-semibold">{Math.round(current.wind.speed * 3.6)} km/h</p>
              </div>
            </div>
            <div className="flex items-center">
              <Compass className="h-5 w-5 mr-2 text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Wind Direction</p>
                <p className="font-semibold">{current.wind.deg}°</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">4-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {forecast.map((day: any, index: number) => {
              const Icon = getWeatherIcon(day.weather[0].icon)
              return (
                <div key={index} className="text-center">
                  <Icon className="mx-auto mb-2 h-8 w-8 text-blue-500" />
                  <h3 className="font-semibold">{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</h3>
                  <p className="text-2xl font-bold">{Math.round(day.main.temp)}°C</p>
                  <p className="text-sm text-gray-500">{day.weather[0].description}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Precipitation Chance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {forecast.map((day: any, index: number) => (
              <div key={index} className="flex items-center">
                <span className="w-20 text-sm">{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</span>
                <Progress value={day.pop * 100} className="flex-grow mr-2" />
                <span className="text-sm font-medium">{Math.round(day.pop * 100)}%</span>
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
          {weatherData.alerts && weatherData.alerts.length > 0 ? (
            <ul className="space-y-2">
              {weatherData.alerts.map((alert: any, index: number) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                    <span className="text-sm">{alert.event}</span>
                  </div>
                  <Badge>{new Date(alert.start * 1000).toLocaleTimeString()} - {new Date(alert.end * 1000).toLocaleTimeString()}</Badge>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No severe weather alerts at this time.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Weather Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <MapPin className="h-12 w-12 text-gray-400" />
            <span className="ml-2 text-gray-600">Weather Map Placeholder</span>
          </div>
          <div className="mt-4 flex justify-between">
            <Button variant="outline">
              <Cloud className="mr-2 h-4 w-4" />
              Toggle Cloud Layer
            </Button>
            <Button variant="outline">
              <Thermometer className="mr-2 h-4 w-4" />
              Toggle Temperature Layer
            </Button>
            <Button variant="outline">
              <Wind className="mr-2 h-4 w-4" />
              Toggle Wind Layer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

