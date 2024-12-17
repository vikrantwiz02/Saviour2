import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, Award, Clock } from 'lucide-react'

export default function TrainingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Training & Workshops</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2" />
                Disaster Preparedness 101
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Learn the basics of preparing for various types of disasters.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="mr-1" size={16} />
                <span>2 hours</span>
              </div>
              <Button className="w-full">Start Course</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="mr-2" />
                Emergency Response Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Video-based training on crucial emergency response methods.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="mr-1" size={16} />
                <span>3 hours</span>
              </div>
              <Button className="w-full">Watch Videos</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2" />
                Certification Programs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Get certified in various aspects of disaster management.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="mr-1" size={16} />
                <span>Variable duration</span>
              </div>
              <Button className="w-full">View Programs</Button>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Live Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Community First Aid</span>
                <Button size="sm">Register</Button>
              </li>
              <li className="flex justify-between items-center">
                <span>Fire Safety at Home</span>
                <Button size="sm">Register</Button>
              </li>
              <li className="flex justify-between items-center">
                <span>Earthquake Preparedness</span>
                <Button size="sm">Register</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

