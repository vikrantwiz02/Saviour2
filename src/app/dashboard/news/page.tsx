import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Newspaper, ExternalLink } from 'lucide-react'

export default function NewsPage() {
  const newsItems = [
    { title: "Local Flood Warning Issued", source: "City Emergency Services" },
    { title: "New Evacuation Routes Announced", source: "Transportation Department" },
    { title: "Community Preparedness Workshop This Weekend", source: "SAVIOUR Organization" },
    { title: "Updated Safety Guidelines Released", source: "National Safety Board" },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-6 p-4 sm:p-6 md:p-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Local News & Updates</h2>
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg md:text-xl flex items-center">
                  <Newspaper className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-gray-500 mb-4">Source: {item.source}</p>
                <Button className="w-full mt-auto text-sm sm:text-base">
                  Read More
                  <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl md:text-2xl">Emergency Broadcasts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 p-3 sm:p-4 rounded-lg mb-4">
              <p className="text-xs sm:text-sm font-semibold">No active emergency broadcasts at this time.</p>
              <p className="text-xs text-gray-500 mt-2">Last checked: {new Date().toLocaleString()}</p>
            </div>
            <Button className="w-full text-sm sm:text-base">Check for Updates</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

