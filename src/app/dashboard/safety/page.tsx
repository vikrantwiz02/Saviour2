import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SafetyPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Safety Guidelines</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Emergency Preparedness</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 mb-4">
              <li>Create an emergency kit</li>
              <li>Develop a family communication plan</li>
              <li>Know your evacuation routes</li>
            </ul>
            <Button className="w-full">Learn More</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Natural Disaster Safety</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 mb-4">
              <li>Earthquake safety tips</li>
              <li>Flood preparedness</li>
              <li>Hurricane safety measures</li>
            </ul>
            <Button className="w-full">View Guidelines</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>First Aid Basics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 mb-4">
              <li>CPR techniques</li>
              <li>Treating burns and wounds</li>
              <li>Recognizing signs of shock</li>
            </ul>
            <Button className="w-full">Take First Aid Course</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

