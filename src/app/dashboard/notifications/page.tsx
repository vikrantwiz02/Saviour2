'use client'

import { useState } from 'react'
import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Bell, Smartphone, Mail, AlertTriangle } from 'lucide-react'

export default function NotificationsPage() {
  const [settings, setSettings] = useState({
    pushNotifications: true,
    emailNotifications: false,
    smsNotifications: true,
    emergencyAlerts: true,
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [setting]: !prev[setting] }))
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <Label htmlFor="push-notifications">Push Notifications</Label>
              </div>
              <Switch
                id="push-notifications"
                checked={settings.pushNotifications}
                onCheckedChange={() => handleToggle('pushNotifications')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <Label htmlFor="email-notifications">Email Notifications</Label>
              </div>
              <Switch
                id="email-notifications"
                checked={settings.emailNotifications}
                onCheckedChange={() => handleToggle('emailNotifications')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5" />
                <Label htmlFor="sms-notifications">SMS Notifications</Label>
              </div>
              <Switch
                id="sms-notifications"
                checked={settings.smsNotifications}
                onCheckedChange={() => handleToggle('smsNotifications')}
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <Label htmlFor="emergency-alerts">Emergency Alerts</Label>
              </div>
              <Switch
                id="emergency-alerts"
                checked={settings.emergencyAlerts}
                onCheckedChange={() => handleToggle('emergencyAlerts')}
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Notification Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="weather-alerts" className="mr-2" />
                <label htmlFor="weather-alerts" className="text-sm">Weather Alerts</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="community-updates" className="mr-2" />
                <label htmlFor="community-updates" className="text-sm">Community Updates</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="resource-availability" className="mr-2" />
                <label htmlFor="resource-availability" className="text-sm">Resource Availability</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="evacuation-notices" className="mr-2" />
                <label htmlFor="evacuation-notices" className="text-sm">Evacuation Notices</label>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button className="w-full sm:w-auto">Save Notification Settings</Button>
      </div>
    </DashboardLayout>
  )
}