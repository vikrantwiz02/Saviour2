import { NextResponse } from 'next/server'

const API_KEY = process.env.OPENWEATHERMAP_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export async function GET() {
  try {
    const cityName = 'London' // You can make this dynamic later
    const currentWeatherResponse = await fetch(
      `${BASE_URL}/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    )
    const currentWeatherData = await currentWeatherResponse.json()

    const forecastResponse = await fetch(
      `${BASE_URL}/forecast?q=${cityName}&units=metric&appid=${API_KEY}`
    )
    const forecastData = await forecastResponse.json()

    return NextResponse.json({
      current: currentWeatherData,
      forecast: forecastData
    })
  } catch (error) {
    console.error('Error fetching weather data:', error)
    return NextResponse.json({ error: 'Failed to fetch weather data' }, { status: 500 })
  }
}

