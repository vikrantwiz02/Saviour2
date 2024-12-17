'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export { metadata } from './metadata'

export default function DonatePage() {
  const [oneTimeAmount, setOneTimeAmount] = useState('')
  const [monthlyAmount, setMonthlyAmount] = useState('')

  const handleOneTimeAmountClick = (amount: string) => {
    setOneTimeAmount(amount)
  }

  const handleMonthlyAmountClick = (amount: string) => {
    setMonthlyAmount(amount)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Support Our Mission</h1>
        <p className="text-xl text-center mb-12">Your donation helps us provide critical resources and support to communities affected by disasters. Every contribution makes a difference.</p>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>One-Time Donation</CardTitle>
              <CardDescription>Make a single contribution to our cause</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {['10', '25', '50', '100'].map((amount) => (
                  <Button 
                    key={amount} 
                    variant={oneTimeAmount === amount ? "default" : "outline"}
                    onClick={() => handleOneTimeAmountClick(amount)}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <div>
                <Label htmlFor="custom-amount">Custom Amount</Label>
                <Input 
                  id="custom-amount" 
                  placeholder="Enter amount" 
                  type="number" 
                  min="1" 
                  step="1"
                  value={oneTimeAmount}
                  onChange={(e) => setOneTimeAmount(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Donate Now</Button>
            </CardFooter>
          </Card>
          
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Monthly Donation</CardTitle>
              <CardDescription>Become a regular supporter</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {['5', '10', '20', '50'].map((amount) => (
                  <Button 
                    key={amount} 
                    variant={monthlyAmount === amount ? "default" : "outline"}
                    onClick={() => handleMonthlyAmountClick(amount)}
                  >
                    ${amount}/mo
                  </Button>
                ))}
              </div>
              <div>
                <Label htmlFor="custom-monthly">Custom Monthly Amount</Label>
                <Input 
                  id="custom-monthly" 
                  placeholder="Enter amount" 
                  type="number" 
                  min="1" 
                  step="1"
                  value={monthlyAmount}
                  onChange={(e) => setMonthlyAmount(e.target.value)}
                />
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

