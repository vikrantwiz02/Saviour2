import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle, Mail, Home } from 'lucide-react'

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">User Profile</h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
              <UserCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
                  <Input id="firstName" defaultValue="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" className="mt-1" />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm sm:text-base">Phone</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="address" className="text-sm sm:text-base">Address</Label>
                <Input id="address" defaultValue="123 Safety Street, Secure City, SC 12345" className="mt-1" />
              </div>
              <Button type="submit" className="w-full sm:w-auto text-sm sm:text-base">Update Profile</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Notification Preferences
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs sm:text-sm text-gray-500">Notification preferences coming soon...</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
              <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Emergency Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs sm:text-sm text-gray-500">Emergency contacts management coming soon...</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

