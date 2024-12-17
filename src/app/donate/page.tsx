import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: 'Donate - SAVIOUR',
  description: 'Support our mission by donating to SAVIOUR',
}

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Support Our Mission</h1>
        <p className="text-xl text-center mb-12">Your donation helps us provide critical resources and support to communities affected by disasters. Every contribution makes a difference.</p>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>One-Time Donation</CardTitle>
              <CardDescription>Make a single contribution to our cause</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Button variant="outline">$10</Button>
                <Button variant="outline">$25</Button>
                <Button variant="outline">$50</Button>
                <Button variant="outline">$100</Button>
              </div>
              <div>
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <Input id="custom-amount" placeholder="Enter amount" type="number" min="1" step="1" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Donate Now</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Monthly Donation</CardTitle>
              <CardDescription>Become a regular supporter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Button variant="outline">$5/mo</Button>
                <Button variant="outline">$10/mo</Button>
                <Button variant="outline">$20/mo</Button>
                <Button variant="outline">$50/mo</Button>
              </div>
              <div>
                <Label htmlFor="custom-monthly">Custom Monthly Amount</Label>
                <Input id="custom-monthly" placeholder="Enter amount" type="number" min="1" step="1" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Monthly Donation</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Other Ways to Support</h2>
          <p className="mb-4">If you prefer to donate by check or have any questions about donating, please contact our donation team:</p>
          <p className="font-semibold">donations@saviour.org | (123) 456-7890</p>
        </div>
      </div>
    </div>
  )
}

