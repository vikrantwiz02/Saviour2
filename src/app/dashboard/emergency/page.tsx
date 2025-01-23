import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Phone, Shield, Plus } from 'lucide-react'

export default function EmergencyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Emergency Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-red-100">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center">
              <Truck className="mr-2" />
              Fire Department
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700 mb-4">For fire emergencies and rescue operations</p>
            <p className="text-2xl font-bold text-red-800">Call: 911</p>
          </CardContent>
        </Card>
        <Card className="bg-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center">
              <Shield className="mr-2" />
              Police Department
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 mb-4">For law enforcement and immediate danger</p>
            <p className="text-2xl font-bold text-blue-800">Call: 911</p>
          </CardContent>
        </Card>
        <Card className="bg-green-100">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center">
              <Plus className="mr-2" />
              Medical Emergency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 mb-4">For life-threatening medical situations</p>
            <p className="text-2xl font-bold text-green-800">Call: 911</p>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Emergency Preparedness</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Create an emergency kit with essential supplies</li>
            <li>Develop a family communication plan</li>
            <li>Stay informed about local emergency alerts</li>
            <li>Know evacuation routes and shelter locations</li>
            <li>Learn basic first aid and CPR</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Phone className="mr-2" />
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <strong>Police Non-Emergency:</strong> 555-0100
            </li>
            <li>
              <strong>Fire Department Non-Emergency:</strong> 555-0200
            </li>
            <li>
              <strong>Poison Control:</strong> 1-800-222-1222
            </li>
            <li>
              <strong>Local Hospital:</strong> 555-0300
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

