'use client'

import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sun, Cloud, CloudRain, Wind, Thermometer, Droplets, Compass, AlertTriangle, MapPin, Loader2 } from 'lucide-react'

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY || ''
if (!API_KEY) {
  console.error('OpenWeatherMap API key is missing. Please check your .env.local file.')
}

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

interface WeatherData {
  current: {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    weather: Array<{
      icon: string;
      description: string;
    }>;
  };
  forecast: Array<{
    dt: number;
    main: {
      temp: number;
    };
    weather: Array<{
      icon: string;
      description: string;
    }>;
    pop: number;
  }>;
  alerts: Array<{
    event: string;
    start: number;
    end: number;
  }>;
}

async function getUserLocation(): Promise<{ city: string; country: string }> {
  try {
    const response = await fetch('https://ipapi.co/json/')
    if (!response.ok) {
      throw new Error('Failed to fetch location data')
    }
    const data = await response.json()
    return { city: data.city, country: data.country_name }
  } catch (error) {
    console.error('Error fetching user location:', error)
    throw error
  }
}

async function getWeatherData(city: string): Promise<WeatherData> {
  try {
    const currentWeatherResponse = await fetch(
      `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
    if (!currentWeatherResponse.ok) {
      throw new Error(`Weather API error: ${currentWeatherResponse.status} ${currentWeatherResponse.statusText}`)
    }
    const currentWeatherData = await currentWeatherResponse.json()

    const forecastResponse = await fetch(
      `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
    )
    if (!forecastResponse.ok) {
      throw new Error(`Forecast API error: ${forecastResponse.status} ${forecastResponse.statusText}`)
    }
    const forecastData = await forecastResponse.json()

    // Process forecast data to get daily forecasts
    const dailyForecasts = forecastData.list.filter((_: unknown, index: number) => index % 8 === 0).slice(0, 4)

    // Fetch alerts (Note: This API endpoint might not be available in all regions or API plans)
    const alertsResponse = await fetch(
      `${BASE_URL}/onecall?lat=${currentWeatherData.coord.lat}&lon=${currentWeatherData.coord.lon}&exclude=current,minutely,hourly,daily&appid=${API_KEY}`
    )
    if (!alertsResponse.ok) {
      console.warn(`Alerts API error: ${alertsResponse.status} ${alertsResponse.statusText}`)
      // Continue without alerts if this endpoint fails
    }
    const alertsData = await alertsResponse.json()

    return {
      current: currentWeatherData,
      forecast: dailyForecasts,
      alerts: alertsData.alerts || []
    }
  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw error
  }
}

export default function WeatherPage() {
  const { status } = useSession()
  const router = useRouter()
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userLocation, setUserLocation] = useState<{ city: string; country: string } | null>(null)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/auth/login')
    }
  }, [status, router])

  useEffect(() => {
    async function fetchData() {
      try {
        const location = await getUserLocation()
        setUserLocation(location)
        const data = await getWeatherData(location.city)
        setWeatherData(data)
      } catch (err) {
        console.error('Error:', err)
        setError('Failed to fetch weather data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getWeatherIcon = (iconCode: string) => {
    switch (iconCode) {
      case '01d': case '01n': return Sun
      case '02d': case '02n': case '03d': case '03n': case '04d': case '04n': return Cloud
      case '09d': case '09n': case '10d': case '10n': return CloudRain
      case '11d': case '11n': return AlertTriangle
      default: return Cloud
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading weather data...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center mt-8">
        <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-4" />
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  if (!weatherData || !userLocation) {
    return null
  }

  const { current, forecast, alerts } = weatherData

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Weather Forecast</h2>
        <Button variant="outline">
          <MapPin className="mr-2 h-4 w-4" />
          {userLocation.city}, {userLocation.country}
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
            {forecast.map((day, index) => {
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
            {forecast.map((day, index) => (
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
          {alerts && alerts.length > 0 ? (
            <ul className="space-y-2">
              {alerts.map((alert, index) => (
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
    </div>
  )
}

