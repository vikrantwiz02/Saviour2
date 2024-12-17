import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Calendar, FileText } from 'lucide-react'

export default function HistoricalPage() {
  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Historical Data & Analytics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2" />
                Disaster Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">View historical trends of disasters in your area.</p>
              <Button>View Trends</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2" />
                Event Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Explore a timeline of past disaster events.</p>
              <Button>Open Timeline</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2" />
                Reports Archive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Access detailed reports from previous incidents.</p>
              <Button>Browse Reports</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Data Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <p>Historical Data Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

