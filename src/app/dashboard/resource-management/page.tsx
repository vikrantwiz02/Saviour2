import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Package, Droplet, Battery, Stethoscope, Plus } from 'lucide-react'

export default function ResourceManagementPage() {
  const resources = [
    { name: 'Food Supplies', icon: Package, level: 75 },
    { name: 'Water', icon: Droplet, level: 60 },
    { name: 'Power', icon: Battery, level: 90 },
    { name: 'Medical Supplies', icon: Stethoscope, level: 45 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Resource Management</h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <Card key={resource.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
                  <resource.icon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {resource.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-xl sm:text-2xl font-bold mb-2">{resource.level}%</div>
                <Progress value={resource.level} className="mb-4" />
                <Button className="w-full text-sm sm:text-base">Manage</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl">Resource Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-48 sm:h-64 rounded-lg flex items-center justify-center mb-4">
              <p className="text-xs sm:text-sm text-gray-600">Distribution Map Placeholder</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button className="flex-1 text-sm sm:text-base">View Detailed Report</Button>
              <Button className="flex items-center text-sm sm:text-base" variant="outline">
                <Plus className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Add New Resource
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

