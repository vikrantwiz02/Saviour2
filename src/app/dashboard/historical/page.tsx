import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Calendar, FileText } from 'lucide-react'

export default function HistoricalPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Historical Data & Analytics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BarChart className="mr-2 h-5 w-5" />
                Disaster Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm">View historical trends of disasters in your area.</p>
              <Button className="w-full">View Trends</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Event Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm">Explore a timeline of past disaster events.</p>
              <Button className="w-full">Open Timeline</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <FileText className="mr-2 h-5 w-5" />
                Reports Archive
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4 text-sm">Access detailed reports from previous incidents.</p>
              <Button className="w-full">Browse Reports</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Data Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 md:h-96 flex items-center justify-center rounded-lg">
              <p className="text-gray-600">Historical Data Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}