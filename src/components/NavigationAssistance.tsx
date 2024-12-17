import { Button } from "@/components/ui/button"
import { MapPin } from 'lucide-react'

export function NavigationAssistance() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Navigation Assistance</h2>
      <div className="bg-gray-100 h-48 mb-4 flex items-center justify-center">
        <MapPin className="h-12 w-12 text-gray-400" />
      </div>
      <Button className="w-full">Find Nearest Safe Zone</Button>
    </div>
  )
}

