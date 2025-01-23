import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HelpingHand, MessageSquare, TrendingUp } from 'lucide-react'
import { CommunityForm } from "@/components/CommunityForm"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Community</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="mr-2" />
              Community Members
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Connect with 5,000+ members in your local community.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpingHand className="mr-2" />
              Volunteer Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find ways to help and make a difference in your area.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2" />
              Discussion Forums
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Join conversations on local issues and events.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="mr-2" />
              Community Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Participate in ongoing community improvement initiatives.</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <CommunityForm />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-medium">Community Clean-up Day</h3>
            <p className="text-gray-600">Saturday, 10:00 AM at Central Park</p>
            <Button className="mt-2">RSVP</Button>
          </li>
          <li>
            <h3 className="text-lg font-medium">Neighborhood Watch Meeting</h3>
            <p className="text-gray-600">Tuesday, 7:00 PM at Community Center</p>
            <Button className="mt-2">RSVP</Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

