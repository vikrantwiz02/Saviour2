'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NotificationSettings() {
  const [emailAlerts, setEmailAlerts] = useState(true)
  const [smsAlerts, setSmsAlerts] = useState(false)
  const [pushNotifications, setPushNotifications] = useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Settings</CardTitle>
        <CardDescription>Manage how you receive alerts and updates</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-alerts">Email Alerts</Label>
          <Switch
            id="email-alerts"
            checked={emailAlerts}
            onCheckedChange={setEmailAlerts}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="sms-alerts">SMS Alerts</Label>
          <Switch
            id="sms-alerts"
            checked={smsAlerts}
            onCheckedChange={setSmsAlerts}
          />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="push-notifications">Push Notifications</Label>
          <Switch
            id="push-notifications"
            checked={pushNotifications}
            onCheckedChange={setPushNotifications}
          />
        </div>
      </CardContent>
    </Card>
  )
}

