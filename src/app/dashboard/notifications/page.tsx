import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HelpingHand, MessageSquare, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function NotificationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                <HelpingHand className="h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Emergency Alert</h3>
                  <p className="text-sm text-gray-600">Severe weather warning in your area. Take necessary precautions.</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                <Users className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Community Update</h3>
                  <p className="text-sm text-gray-600">New volunteer opportunity available in your neighborhood.</p>
                  <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                <MessageSquare className="h-5 w-5 text-purple-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Message</h3>
                  <p className="text-sm text-gray-600">New response to your community forum post.</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Status Update</h3>
                  <p className="text-sm text-gray-600">Your emergency preparedness score has improved!</p>
                  <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Emergency Alerts</h3>
                  <p className="text-sm text-gray-600">Receive notifications for emergency situations</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Community Updates</h3>
                  <p className="text-sm text-gray-600">Get updates about community events and activities</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Message Notifications</h3>
                  <p className="text-sm text-gray-600">Notifications for new messages and responses</p>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

