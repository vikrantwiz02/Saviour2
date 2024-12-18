import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HandHelping, MessageSquare, TrendingUp } from 'lucide-react'
import { CommunityForm } from "@/components/CommunityForm"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  const stats = [
    { name: 'Active Volunteers', icon: Users, value: 127, change: 12 },
    { name: 'Open Requests', icon: HandHelping, value: 15, change: -3 },
    { name: 'Community Messages', icon: MessageSquare, value: 89, change: 24 },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Community Support</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.name} className="flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center mt-1">
                  <TrendingUp className={`h-3 w-3 mr-1 ${stat.change > 0 ? 'text-green-500' : 'text-red-500 transform rotate-180'}`} />
                  {Math.abs(stat.change)} since last week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Offer or Request Support</CardTitle>
          </CardHeader>
          <CardContent>
            <CommunityForm />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Recent Community Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span className="text-sm">Food distribution event organized</span>
                <Button size="sm">View Details</Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Volunteer training session scheduled</span>
                <Button size="sm">View Details</Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Community cleanup initiative started</span>
                <Button size="sm">View Details</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

