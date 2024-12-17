import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Map, AlertTriangle, Info } from 'lucide-react'

export default function RiskMapPage() {
  const highRiskAreas = [
    { name: 'Coastal Region A', risk: 'High' },
    { name: 'Mountain Valley B', risk: 'Moderate' },
    { name: 'Urban Center C', risk: 'Low' },
  ]

  const currentAlerts = [
    { type: 'Flood Warning', location: 'Region A' },
    { type: 'Fire Risk', location: 'Region B' },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Interactive Risk Map</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
              <Map className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Risk Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 sm:h-96 rounded-lg flex items-center justify-center mb-4">
              <p className="text-xs sm:text-sm text-gray-600">Interactive Risk Map Placeholder</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button className="text-sm sm:text-base">Toggle Layers</Button>
              <Button variant="outline" className="text-sm sm:text-base">Full Screen</Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg md:text-xl">High Risk Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {highRiskAreas.map((area, index) => (
                  <li key={index} className="flex justify-between items-center text-xs sm:text-sm">
                    <span>{area.name}</span>
                    <Badge variant={area.risk === 'High' ? 'destructive' : area.risk === 'Moderate' ? 'default' : 'secondary'}>
                      {area.risk}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg md:text-xl">Current Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {currentAlerts.map((alert, index) => (
                  <li key={index} className="flex items-center text-xs sm:text-sm">
                    <AlertTriangle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
                    <span>{alert.type}: {alert.location}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg md:text-xl">Safety Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center text-xs sm:text-sm">
                  <Info className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                  <span>Stay informed about local warnings</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <Info className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                  <span>Prepare an emergency kit</span>
                </li>
                <li className="flex items-center text-xs sm:text-sm">
                  <Info className="mr-2 h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                  <span>Know your evacuation routes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

