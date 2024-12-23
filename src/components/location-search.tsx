'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface LocationSearchProps {
  onLocationChange: (lat: number, lon: number) => void
}

export default function LocationSearch({ onLocationChange }: LocationSearchProps) {
  const [query, setQuery] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY}`)
      const data = await res.json()
      if (data.length > 0) {
        onLocationChange(data[0].lat, data[0].lon)
      } else {
        alert('Location not found')
      }
    } catch (error) {
      console.error('Error searching for location:', error)
      alert('Error searching for location')
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <Input
        type="text"
        placeholder="Search for a city"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit">
        <Search className="h-4 w-4 mr-2" />
        Search
      </Button>
    </form>
  )
}

