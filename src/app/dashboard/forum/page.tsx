import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, TrendingUp, PlusCircle } from 'lucide-react'

export default function ForumPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h2 className="text-2xl font-bold">Community Forum</h2>
          <Button>
            <PlusCircle className="mr-2" size={16} />
            New Thread
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Recent Discussions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span className="text-sm">Emergency Kit Essentials</span>
                  <Button variant="ghost" size="sm">View</Button>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm">Evacuation Plan Tips</span>
                  <Button variant="ghost" size="sm">View</Button>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-sm">Post-Disaster Recovery</span>
                  <Button variant="ghost" size="sm">View</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <Users className="mr-2 h-5 w-5" />
                Active Members
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm">John Doe</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Jane Smith</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm">Alex Johnson</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center text-lg">
                <TrendingUp className="mr-2 h-5 w-5" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1 mr-2">#PreparednessTips</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 mr-2">#CommunityResilience</span>
                </li>
                <li className="flex items-center">
                  <span className="text-xs bg-purple-100 text-purple-800 rounded-full px-2 py-1 mr-2">#DisasterTech</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Forum Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Be respectful and supportive of other community members.</li>
              <li>Share accurate information from reliable sources.</li>
              <li>Do not share personal information in public threads.</li>
              <li>Report any inappropriate content to moderators.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}