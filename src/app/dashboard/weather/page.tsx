'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { fetchWeatherData, WeatherData } from '@/lib/weatherApi'

export default function WeatherPage() {
  const { isSignedIn, user } = useUser()
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [city, setCity] = useState('London')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async (cityName: string) => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchWeatherData(cityName)
      setWeather(data)
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSignedIn) {
      fetchWeather(city)
    }
  }, [isSignedIn])

  if (!isSignedIn) {
    return <div className="container mx-auto px-4 py-8">Please sign in to view the weather.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Search Weather</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={() => fetchWeather(city)} disabled={loading}>
              {loading ? 'Loading...' : 'Search'}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {error && (
        <Card className="mb-6 bg-red-100">
          <CardContent className="text-red-700 py-4">{error}</CardContent>
        </Card>
      )}

      {weather && (
        <Card>
          <CardHeader>
            <CardTitle>Current Weather in {weather.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">{Math.round(weather.main.temp)}°C</p>
                <p className="text-gray-600">Feels like {Math.round(weather.main.feels_like)}°C</p>
              </div>
              <div>
                <p className="text-xl">{weather.weather[0].main}</p>
                <p className="text-gray-600">{weather.weather[0].description}</p>
              </div>
              <div>
                <p className="text-lg">Humidity</p>
                <p className="text-gray-600">{weather.main.humidity}%</p>
              </div>
              <div>
                <img 
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

