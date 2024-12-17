'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsItem {
  id: number
  title: string
  description: string
  source: string
}

export default function LocalNews() {
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchNews = async () => {
      // Simulating an API call with setTimeout
      setTimeout(() => {
        setNews([
          { id: 1, title: "Local Flood Warning Issued", description: "Authorities have issued a flood warning for the downtown area.", source: "City News" },
          { id: 2, title: "Community Preparedness Workshop Announced", description: "A free workshop on disaster preparedness will be held next week.", source: "Community Center" },
          { id: 3, title: "New Emergency Response Plan Unveiled", description: "City officials have released an updated emergency response plan.", source: "Mayor's Office" },
        ])
      }, 1000)
    }

    fetchNews()
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Local News</CardTitle>
        <CardDescription>Stay informed with the latest local updates</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-xs text-gray-400 mt-1">Source: {item.source}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

