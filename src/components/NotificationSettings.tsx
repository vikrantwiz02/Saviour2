'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@example.com')

  const handleSave = () => {
    // Here you would typically send an API request to update the user's information
    setIsEditing(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Manage your personal information</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-gray-500">{email}</p>
          </div>
        </div>
        {isEditing ? (
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <Button type="submit">Save Changes</Button>
          </form>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
        )}
      </CardContent>
    </Card>
  )
}

