import DashboardLayout from "@/components/DashboardLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SupplyChainPage() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-4">Supply Chain Tracking</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Food Supplies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current stock: 75%</p>
            <p>Next delivery: 2 days</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Medical Supplies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current stock: 60%</p>
            <p>Next delivery: 1 day</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Water</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Current stock: 90%</p>
            <p>Next delivery: 5 days</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

