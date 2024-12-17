import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Navigation, Users, Database } from 'lucide-react'

const features = [
  {
    title: "Real-Time Alerts",
    description: "Receive instant notifications about emergencies and critical updates in your area.",
    icon: AlertTriangle,
  },
  {
    title: "Navigation Assistance",
    description: "Get guided routes to the nearest safe zones and emergency services.",
    icon: Navigation,
  },
  {
    title: "Community Support",
    description: "Connect with local volunteers and organizations to give or receive help.",
    icon: Users,
  },
  {
    title: "Resource Management",
    description: "Track and manage essential supplies and resources during crisis situations.",
    icon: Database,
  },
]

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

