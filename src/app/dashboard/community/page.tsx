'use client'

import { useState } from 'react'
import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Users, HandHelping, MessageSquare } from 'lucide-react'

export default function CommunityPage() {
  const [supportType, setSupportType] = useState('offer')
  const [resourceType, setResourceType] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit support offer/request
    console.log({ supportType, resourceType, description })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Community Support</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Active Volunteers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">127</div>
              <p className="text-sm text-gray-500">Ready to help in your area</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <HandHelping className="mr-2 h-5 w-5" />
                Open Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">15</div>
              <p className="text-sm text-gray-500">Assistance needed</p>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Community Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">89</div>
              <p className="text-sm text-gray-500">New messages today</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Offer or Request Support</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Select value={supportType} onValueChange={setSupportType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select support type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="offer">Offer Help</SelectItem>
                      <SelectItem value="request">Request Help</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Select value={resourceType} onValueChange={setResourceType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select resource type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="shelter">Shelter</SelectItem>
                      <SelectItem value="water">Water</SelectItem>
                      <SelectItem value="medical">Medical Supplies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="min-h-[100px]"
              />
              <Button type="submit" className="w-full sm:w-auto">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

