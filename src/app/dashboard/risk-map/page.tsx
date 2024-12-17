import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RiskMapPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Interactive Risk Map</h2>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Risk Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-200 h-96 flex items-center justify-center">
            <p>Interactive Risk Map Placeholder</p>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>High Risk Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Coastal Region A</li>
              <li>Mountain Valley B</li>
              <li>Urban Center C</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Flood Warning: Region A</li>
              <li>Fire Risk: Region B</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Safety Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Stay informed about local warnings</li>
              <li>Prepare an emergency kit</li>
              <li>Know your evacuation routes</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}