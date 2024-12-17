import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Ambulance, Truck, Shield } from 'lucide-react'

export default function EmergencyPage() {
  const emergencyContacts = [
    { name: 'Emergency Services', number: '911', icon: Phone },
    { name: 'Local Police', number: '(555) 123-4567', icon: Shield },
    { name: 'Fire Department', number: '(555) 987-6543', icon: Truck },
    { name: 'Ambulance', number: '(555) 789-0123', icon: Ambulance },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {emergencyContacts.map((contact) => (
            <Card key={contact.name} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <contact.icon className="mr-2 h-5 w-5" />
                  {contact.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-2xl font-bold mb-4">{contact.number}</p>
                <Button className="w-full sm:w-auto">Call Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Personal Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span className="text-sm">John Doe (Family)</span>
                <Button variant="outline" size="sm">Call</Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Jane Smith (Neighbor)</span>
                <Button variant="outline" size="sm">Call</Button>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-sm">Dr. Johnson (Personal Doctor)</span>
                <Button variant="outline" size="sm">Call</Button>
              </li>
            </ul>
            <Button className="w-full mt-4">Add New Contact</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}