'use client'

import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sun, Cloud, CloudRain, Wind, Thermometer, Droplets, Compass, AlertTriangle, MapPin } from 'lucide-react'
import LocationSearch from '@/components/location-search'
import type { WeatherData } from "@/types/weather"

const getWindDirection = (deg: number): string => {
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return directions[Math.round(deg / 45) % 8]
}

const getWeatherIcon = (main: string) => {
  switch (main.toLowerCase()) {
    case 'clear':
      return Sun
    case 'clouds':
      return Cloud
    case 'rain':
      return CloudRain
    default:
      return Cloud
  }
}

export default function WeatherPage() {
  const { data: session, status } = useSession()
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [location, setLocation] = useState({ lat: 51.5074, lon: -0.1278 }) // Default to London

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect('/auth/login')
    }
  }, [status])

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`/api/weather?lat=${location.lat}&lon=${location.lon}`)
        if (!response.ok) {
          throw new Error('Failed to fetch weather data')
        }
        const data = await response.json()
        setWeatherData(data)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeatherData()
  }, [location])

  if (status === "loading" || !weatherData) {
    return <div>Loading...</div>
  }

  const currentConditions = [
    { 
      label: 'Temperature', 
      value: `${Math.round(weatherData.current.temp)}°C`, 
      icon: Thermometer 
    },
    { 
      label: 'Humidity', 
      value: `${weatherData.current.humidity}%`, 
      icon: Droplets 
    },
    { 
      label: 'Wind Speed', 
      value: `${Math.round(weatherData.current.wind_speed * 3.6)} km/h`, 
      icon: Wind 
    },
    { 
      label: 'Wind Direction', 
      value: getWindDirection(weatherData.current.wind_deg), 
      icon: Compass 
    },
  ]

  const forecast = weatherData.daily.slice(0, 4).map((day, index) => ({
    day: index === 0 ? 'Today' : new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' }),
    temp: Math.round(day.temp.day),
    icon: getWeatherIcon(day.weather[0].main),
    description: day.weather[0].description,
    precipitation: Math.round(day.pop * 100)
  }))

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-2xl font-bold">Weather Forecast</h2>
        <LocationSearch onLocationChange={(lat, lon) => setLocation({ lat, lon })} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Current Conditions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <CardTitle className="text-lg">4-Day Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {forecast.map((day) => (
              <div key={day.day} className="text-center">
                <day.icon className="mx-auto mb-2 h-8 w-8 text-blue-500" />
                <h3 className="font-semibold">{day.day}</h3>
                <p className="text-2xl font-bold">{day.temp}°C</p>
                <p className="text-sm text-gray-500 capitalize">{day.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Precipitation Chance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {forecast.map((day) => (
                <div key={day.day} className="flex items-center">
                  <span className="w-20 text-sm">{day.day}</span>
                  <Progress value={day.precipitation} className="flex-grow mr-2" />
                  <span className="text-sm font-medium">{day.precipitation}%</span>
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
                {weatherData.alerts.map((alert, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                      <span className="text-sm">{alert.event}</span>
                    </div>
                    <Badge>
                      {new Date(alert.start * 1000).toLocaleTimeString()} - 
                      {new Date(alert.end * 1000).toLocaleTimeString()}
                    </Badge>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No current weather alerts</p>
            )}
          </CardContent>
        </Card>
      </div>

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

