import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationSettings } from "@/components/NotificationSettings"
import { Button } from "@/components/ui/button"
import { Bell, Smartphone, Mail, AlertTriangle, Settings } from 'lucide-react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function NotificationsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <NotificationSettings />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Alert Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <Label htmlFor="critical-alerts">Critical Alerts</Label>
                </div>
                <Switch id="critical-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-yellow-500" />
                  <Label htmlFor="weather-alerts">Weather Alerts</Label>
                </div>
                <Switch id="weather-alerts" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-blue-500" />
                  <Label htmlFor="system-updates">System Updates</Label>
                </div>
                <Switch id="system-updates" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notification History</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center justify-between text-sm">
                <span>Severe Weather Alert</span>
                <span className="text-gray-500">2 hours ago</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span>Evacuation Route Update</span>
                <span className="text-gray-500">1 day ago</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span>Community Event Reminder</span>
                <span className="text-gray-500">3 days ago</span>
              </li>
            </ul>
            <Button className="w-full mt-4">View All Notifications</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

