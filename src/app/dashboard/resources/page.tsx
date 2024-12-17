import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Package, Droplet, Battery, Stethoscope } from 'lucide-react'

export default function ResourcesPage() {
  const resources = [
    { name: 'Food Supplies', icon: Package, level: 75 },
    { name: 'Water', icon: Droplet, level: 60 },
    { name: 'Power', icon: Battery, level: 90 },
    { name: 'Medical Supplies', icon: Stethoscope, level: 45 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Resource Management</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <Card key={resource.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <resource.icon className="mr-2 h-5 w-5" />
                  {resource.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-2xl font-bold mb-2">{resource.level}%</div>
                <Progress value={resource.level} className="mb-4" />
                <Button className="w-full">Manage</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resource Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center mb-4">
              <p className="text-gray-600">Distribution Map Placeholder</p>
            </div>
            <Button className="w-full">View Detailed Report</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

