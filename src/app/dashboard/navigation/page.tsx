import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Navigation, AlertTriangle } from 'lucide-react'

export default function NavigationPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Navigation & Evacuation</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Current Location
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="bg-gray-200 h-48 md:h-64 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-600">Map Placeholder</p>
              </div>
              <p className="text-sm mb-2">123 Safety Street, Secure City, SC 12345</p>
              <Button className="w-full">Update Location</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Navigation className="mr-2 h-5 w-5" />
                Evacuation Routes
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm">
                  <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                  Route A: Main Street to Highway 1 (Congested)
                </li>
                <li className="flex items-center text-sm">
                  <AlertTriangle className="mr-2 h-4 w-4 text-green-500" />
                  Route B: River Road to Mountain Pass (Clear)
                </li>
                <li className="flex items-center text-sm">
                  <AlertTriangle className="mr-2 h-4 w-4 text-red-500" />
                  Route C: Coastal Highway (Closed)
                </li>
              </ul>
              <Button className="w-full">Get Directions</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Evacuation Centers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-sm">City Hall Shelter</span>
                <Badge variant="outline">2.5 miles</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Central High School</span>
                <Badge variant="outline">3.8 miles</Badge>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Community Center</span>
                <Badge variant="outline">5.2 miles</Badge>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

