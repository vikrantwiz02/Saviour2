import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunitySupport() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Support</CardTitle>
        <CardDescription>Offer or request help from your community</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Type of Support" />
          <Textarea placeholder="Description" />
          <div className="flex space-x-2">
            <Button type="submit" className="flex-1">Offer Help</Button>
            <Button type="button" variant="outline" className="flex-1">Request Help</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

