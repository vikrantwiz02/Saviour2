'use client'

import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type WeatherData = {
  date: string
  temperature: number
  precipitation: number
}

export function WeatherForecast() {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([])

  useEffect(() => {
    // Fetch weather data
    // This is a placeholder and should be replaced with actual API call
    const fetchWeatherData = async () => {
      const response = await fetch('/api/weather')
      const data = await response.json()
      setWeatherData(data)
    }
    fetchWeatherData()
  }, [])

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={weatherData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="precipitation" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

