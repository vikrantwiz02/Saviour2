import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, BookOpen, Stethoscope } from 'lucide-react'

export default function SafetyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Safety Guidelines</h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
                <Shield className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Emergency Preparedness
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 mb-4 space-y-2 text-xs sm:text-sm">
                <li>Create an emergency kit</li>
                <li>Develop a family communication plan</li>
                <li>Know your evacuation routes</li>
              </ul>
              <Button className="w-full text-sm sm:text-base">Learn More</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
                <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Natural Disaster Safety
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 mb-4 space-y-2 text-xs sm:text-sm">
                <li>Earthquake safety tips</li>
                <li>Flood preparedness</li>
                <li>Hurricane safety measures</li>
              </ul>
              <Button className="w-full text-sm sm:text-base">View Guidelines</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
                <Stethoscope className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                First Aid Basics
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc pl-5 mb-4 space-y-2 text-xs sm:text-sm">
                <li>CPR techniques</li>
                <li>Treating burns and wounds</li>
                <li>Recognizing signs of shock</li>
              </ul>
              <Button className="w-full text-sm sm:text-base">Take First Aid Course</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg md:text-xl">Safety Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Emergency Contact Numbers</h3>
                <p className="text-xs sm:text-sm text-gray-600">Police: 911</p>
                <p className="text-xs sm:text-sm text-gray-600">Fire Department: 911</p>
                <p className="text-xs sm:text-sm text-gray-600">Ambulance: 911</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Local Emergency Services</h3>
                <p className="text-xs sm:text-sm text-gray-600">City Emergency Management: (555) 123-4567</p>
                <p className="text-xs sm:text-sm text-gray-600">Poison Control: 1-800-222-1222</p>
              </div>
              <Button className="w-full text-sm sm:text-base">Download Safety Guide PDF</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

