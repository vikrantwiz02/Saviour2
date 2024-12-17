import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EmergencyContacts() {
  const contacts = [
    { name: 'Emergency Services', number: '112' },
    { name: 'Local Police', number: '100' },
    { name: 'Fire Department', number: '101' },
    { name: 'Ambulance', number: '108' },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emergency Contacts</CardTitle>
        <CardDescription>Quick access to important emergency numbers</CardDescription>
      </CardHeader>
      <CardContent>
        {contacts.map((contact) => (
          <Button key={contact.name} variant="outline" className="w-full mb-2 justify-start">
            <Phone className="mr-2 h-4 w-4" />
            {contact.name}: {contact.number}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}

