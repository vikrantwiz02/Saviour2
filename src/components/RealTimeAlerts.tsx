import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell } from 'lucide-react'

export function RealTimeAlerts() {
  // Placeholder data - in a real app, this would come from an API
  const alerts = [
    { id: 1, type: 'warning', title: 'Flood Warning', description: 'Potential flooding in low-lying areas.' },
    { id: 2, type: 'error', title: 'Severe Thunderstorm', description: 'Take shelter immediately.' },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Real-Time Alerts</h2>
      {alerts.map((alert) => (
        <Alert key={alert.id} variant={alert.type as 'default' | 'destructive'}>
          <Bell className="h-4 w-4" />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}

