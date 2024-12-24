'use client'

import { useState, useEffect } from 'react'
import { useGeolocation } from '@/hooks/useGeolocation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Sun, Cloud, CloudRain, Wind, Thermometer, Compass, AlertTriangle, MapPin } from 'lucide-react'

type WeatherData = {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
}

export function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { latitude, longitude } = useGeolocation()

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherData(latitude, longitude)
    }
  }, [latitude, longitude])

  const fetchWeatherData = async (lat: number, lon: number) => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=475dad9f469397c42f28ed2ce92b2537`)
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError('Error fetching weather data. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const getWeatherIcon = (main: string) => {
    switch (main.toLowerCase()) {
      case 'clear':
        return <Sun className="h-8 w-8 text-yellow-500" />;
      case 'clouds':
        return <Cloud className="h-8 w-8 text-gray-500" />;
      case 'rain':
        return <CloudRain className="h-8 w-8 text-blue-500" />;
      default:
        return <Cloud className="h-8 w-8 text-gray-500" />;
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading weather data...</div>
  }

  if (error) {
    return (
      <Card className="bg-red-50">
        <CardContent className="flex items-center justify-center h-64">
          <AlertTriangle className="h-8 w-8 text-red-500 mr-2" />
          <p className="text-red-700">{error}</p>
        </CardContent>
      </Card>
    )
  }

  if (!weatherData) {
    return null
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center justify-between">
            <span>Current Weather</span>
            <Badge variant="outline" className="text-lg">
              <MapPin className="h-4 w-4 mr-1" />
              {weatherData.name}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col items-center">
            {getWeatherIcon(weatherData.weather[0].main)}
            <h3 className="text-3xl font-bold mt-2">{Math.round(weatherData.main.temp)}°C</h3>
            <p className="text-lg capitalize">{weatherData.weather[0].description}</p>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Humidity</span>
                <span>{weatherData.main.humidity}%</span>
              </div>
              <Progress value={weatherData.main.humidity} className="h-2" />
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <Wind className="h-5 w-5 mr-2" /> Wind
              </span>
              <span>{weatherData.wind.speed} m/s</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <Compass className="h-5 w-5 mr-2" /> Direction
              </span>
              <span>{weatherData.wind.deg}°</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center">
                <Thermometer className="h-5 w-5 mr-2" /> Pressure
              </span>
              <span>{weatherData.main.pressure} hPa</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Button onClick={() => fetchWeatherData(latitude!, longitude!)}>Refresh Weather Data</Button>
    </div>
  )
}

