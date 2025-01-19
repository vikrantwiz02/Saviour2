import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserCircle, Home, Shield } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUserRole } from "@/lib/clerk-mongodb"

export default async function ProfilePage() {
  const user = await currentUser()
  const { userId } = await auth()

  if (!user || !userId) {
    redirect('/sign-in')
  }

  const userRole = await getUserRole(userId)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <UserCircle className="mr-2 h-5 w-5" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
            <Avatar className="w-24 h-24 mb-4 sm:mb-0 sm:mr-6">
              <AvatarImage src={user.imageUrl || "/placeholder.svg?height=96&width=96"} alt={user.firstName || "User"} />
              <AvatarFallback>{user.firstName?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold">{`${user.firstName} ${user.lastName}` || "User Name"}</h3>
              <p className="text-sm text-gray-500">{user.emailAddresses[0].emailAddress || "user@example.com"}</p>
              <p className="text-sm text-gray-500">Role: {userRole}</p>
              <Button className="mt-2" variant="outline" size="sm">Change Avatar</Button>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
                <Input id="firstName" defaultValue={user.firstName || ''} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
                <Input id="lastName" defaultValue={user.lastName || ''} className="mt-1" />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
              <Input id="email" type="email" defaultValue={user.emailAddresses[0].emailAddress || ''} className="mt-1" readOnly />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm sm:text-base">Phone</Label>
              <Input id="phone" type="tel" defaultValue={user.phoneNumbers[0]?.phoneNumber || ''} className="mt-1" />
            </div>
            <div>
              <Label htmlFor="address" className="text-sm sm:text-base">Address</Label>
              <Input id="address" className="mt-1" />
            </div>
            <Button type="submit" className="w-full sm:w-auto text-sm sm:text-base">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Security Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-500">Password management is handled by Clerk. Please use the Clerk user interface to change your password.</p>
            <Button className="w-full sm:w-auto text-sm sm:text-base" onClick={() => window.open('https://accounts.clerk.dev', '_blank')}>
              Change Password via Clerk
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="emergency-contact" className="text-sm sm:text-base">Primary Emergency Contact</Label>
              <Input id="emergency-contact" placeholder="Name" className="mt-1 mb-2" />
              <Input id="emergency-contact-phone" type="tel" placeholder="Phone Number" className="mt-1" />
            </div>
            <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base">Add Another Contact</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

