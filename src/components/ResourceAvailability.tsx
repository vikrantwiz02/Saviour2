import { Progress } from "@/components/ui/progress"

export function ResourceAvailability() {
  // Placeholder data
  const resources = [
    { name: 'Water', available: 75 },
    { name: 'Food', available: 60 },
    { name: 'Medical Supplies', available: 40 },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Resource Availability</h2>
      {resources.map((resource) => (
        <div key={resource.name} className="mb-4">
          <div className="flex justify-between mb-1">
            <span>{resource.name}</span>
            <span>{resource.available}%</span>
          </div>
          <Progress value={resource.available} />
        </div>
      ))}
    </div>
  )
}

