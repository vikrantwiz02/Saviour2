'use client'

import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Resource = {
  id: string
  name: string
  type: string
  quantity: number
  location: string
}

export function ResourceAvailability() {
  const [resources, setResources] = useState<Resource[]>([])

  useEffect(() => {
    // Fetch resources
    // This is a placeholder and should be replaced with actual API call
    const fetchResources = async () => {
      const response = await fetch('/api/resources')
      const data = await response.json()
      setResources(data)
    }
    fetchResources()
  }, [])

  return (
    <Table>
      <TableCaption>Available Resources</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {resources.map((resource) => (
          <TableRow key={resource.id}>
            <TableCell>{resource.name}</TableCell>
            <TableCell>{resource.type}</TableCell>
            <TableCell>{resource.quantity}</TableCell>
            <TableCell>{resource.location}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

