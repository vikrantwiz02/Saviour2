'use client'

import { useState, useEffect } from 'react'
import { Map } from '@/components/Map'
import { useGeolocation } from '@/hooks/useGeolocation'

// Define the Route type
interface Route {
  start: { lat: number; lng: number };
  end: { lat: number; lng: number };
  waypoints: Array<{ lat: number; lng: number }>;
}

export function NavigationAssistance() {
  const [route, setRoute] = useState<Route | undefined>(undefined)
  const { latitude, longitude } = useGeolocation()

  useEffect(() => {
    if (latitude && longitude) {
      // Fetch route based on current location and nearest safe zone
      // This is a placeholder and should be replaced with actual API call
      const fetchRoute = async () => {
        try {
          const response = await fetch(`/api/route?lat=${latitude}&lon=${longitude}`)
          const data: Route = await response.json()
          setRoute(data)
        } catch (error) {
          console.error("Error fetching route:", error)
          setRoute(undefined)
        }
      }
      fetchRoute()
    }
  }, [latitude, longitude])

  return (
    <div className="h-[400px] w-full">
      <Map route={route} />
    </div>
  )
}

