'use client'

import { useState, useEffect } from 'react'
import { Map } from '@/components/Map'
import { useGeolocation } from '@/hooks/useGeolocation'

export function NavigationAssistance() {
  const [route, setRoute] = useState(null)
  const { latitude, longitude } = useGeolocation()

  useEffect(() => {
    if (latitude && longitude) {
      // Fetch route based on current location and nearest safe zone
      // This is a placeholder and should be replaced with actual API call
      const fetchRoute = async () => {
        const response = await fetch(`/api/route?lat=${latitude}&lon=${longitude}`)
        const data = await response.json()
        setRoute(data)
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

