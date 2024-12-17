import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, AlertTriangle, Info } from 'lucide-react'

export function RealTimeAlerts() {
  const alerts = [
    { id: 1, type: 'warning', title: 'Severe Thunderstorm', message: 'Expected in your area within the next 2 hours.' },
    { id: 2, type: 'info', title: 'Road Closure', message: 'Main Street closed due to flooding. Use alternate routes.' },
    { id: 3, type: 'danger', title: 'Evacuation Order', message: 'Immediate evacuation required for Coastal Zone A.' },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Real-Time Alerts</h2>
      {alerts.map((alert) => (
        <Card key={alert.id} className="bg-white mb-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              {alert.type === 'warning' && <AlertTriangle className="inline mr-2 text-yellow-500" />}
              {alert.type === 'info' && <Info className="inline mr-2 text-blue-500" />}
              {alert.type === 'danger' && <Bell className="inline mr-2 text-red-500" />}
              {alert.title}
            </CardTitle>
            <Badge 
              variant={alert.type === 'warning' ? 'default' : alert.type === 'danger' ? 'destructive' : 'secondary'}
            >
              {alert.type.toUpperCase()}
            </Badge>
          </CardHeader>
          <CardContent>
            <p>{alert.message}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

