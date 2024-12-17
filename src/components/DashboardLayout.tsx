import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">SAVIOUR Advanced Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Your Comprehensive Disaster Management Hub</CardTitle>
          <CardDescription>Access critical information, manage resources, and stay informed with advanced features.</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}

