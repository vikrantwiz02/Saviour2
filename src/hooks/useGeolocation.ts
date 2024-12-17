import { useState, useEffect } from 'react'

export function useGeolocation() {
  const [coords, setCoords] = useState<{latitude: number | null, longitude: number | null}>({
    latitude: null,
    longitude: null,
  })

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting geolocation:", error)
        }
      )
    } else {
      console.log("Geolocation is not available in this browser.")
    }
  }, [])

  return coords
}

