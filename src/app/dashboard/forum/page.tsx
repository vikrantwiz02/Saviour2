import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, TrendingUp, PlusCircle } from 'lucide-react'

export default function ForumPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Community Forum</h2>
          <Button>
            <PlusCircle className="mr-2" size={16} />
            New Thread
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="mr-2" />
                Recent Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex justify-between items-center">
                  <span>Emergency Kit Essentials</span>
                  <Button variant="ghost" size="sm">View</Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Evacuation Plan Tips</span>
                  <Button variant="ghost" size="sm">View</Button>
                </li>
                <li className="flex justify-between items-center">
                  <span>Post-Disaster Recovery</span>
                  <Button variant="ghost" size="sm">View</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                Active Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 mr-2"></div>
                  <span>John Doe</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 mr-2"></div>
                  <span>Jane Smith</span>
                </li>
                <li className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 mr-2"></div>
                  <span>Alex Johnson</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2" />
                Trending Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-sm bg-blue-100 text-blue-800 rounded-full px-2 py-1 mr-2">#PreparednessTips</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sm bg-green-100 text-green-800 rounded-full px-2 py-1 mr-2">#CommunityResilience</span>
                </li>
                <li className="flex items-center">
                  <span className="text-sm bg-purple-100 text-purple-800 rounded-full px-2 py-1 mr-2">#DisasterTech</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Forum Guidelines</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
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

