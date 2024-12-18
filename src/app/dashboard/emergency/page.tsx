import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Ambulance, Truck, Shield, Plus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const emergencyContacts = [
 { name: 'Emergency Services', number: '911', icon: Phone },
 { name: 'Local Police', number: '(555) 123-4567', icon: Shield },
 { name: 'Fire Department', number: '(555) 987-6543', icon: Truck },
 { name: 'Ambulance', number: '(555) 789-0123', icon: Ambulance },
]

export default function EmergencyPage() {
 return (
   <DashboardLayout>
     <div className="space-y-6">
       <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
               <Button className="w-full">Call Now</Button>
             </CardContent>
           </Card>
         ))}
       </div>
       <Card>
         <CardHeader>
           <CardTitle className="text-lg">Personal Emergency Contacts</CardTitle>
         </CardHeader>
         <CardContent>
           <ul className="space-y-4 mb-4">
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
           <form className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
               <div>
                 <Label htmlFor="name">Name</Label>
                 <Input id="name" placeholder="Contact Name" />
               </div>
               <div>
                 <Label htmlFor="relation">Relation</Label>
                 <Input id="relation" placeholder="Relation" />
               </div>
             </div>
             <div>
               <Label htmlFor="phone">Phone Number</Label>
               <Input id="phone" placeholder="Phone Number" type="tel" />
             </div>
             <Button className="w-full">
               <Plus className="mr-2 h-4 w-4" /> Add New Contact
             </Button>
           </form>
         </CardContent>
       </Card>
     </div>
   </DashboardLayout>
 )
}

