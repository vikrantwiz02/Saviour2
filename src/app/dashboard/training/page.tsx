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
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                Disaster Preparedness 101
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-2 text-sm">Learn the basics of preparing for various types of disasters.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="mr-1" size={16} />
                <span>2 hours</span>
              </div>
              <Button className="w-full">Start Course</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Video className="mr-2 h-5 w-5" />
                Emergency Response Techniques
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-2 text-sm">Video-based training on crucial emergency response methods.</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <Clock className="mr-1" size={16} />
                <span>3 hours</span>
              </div>
              <Button className="w-full">Watch Videos</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Award className="mr-2 h-5 w-5" />
                Certification Programs
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-2 text-sm">Get certified in various aspects of disaster management.</p>
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
            <CardTitle className="text-xl">Upcoming Live Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <span className="text-sm mb-2 sm:mb-0">Community First Aid</span>
                <Button size="sm">Register</Button>
              </li>
              <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <span className="text-sm mb-2 sm:mb-0">Fire Safety at Home</span>
                <Button size="sm">Register</Button>
              </li>
              <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <span className="text-sm mb-2 sm:mb-0">Earthquake Preparedness</span>
                <Button size="sm">Register</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}