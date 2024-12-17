import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const resources = [
    { name: "Water", quantity: 1000, unit: "liters", location: "Central Depot" },
    { name: "Food Packs", quantity: 500, unit: "packs", location: "Central Depot" },
    { name: "Blankets", quantity: 200, unit: "pieces", location: "North Shelter" },
    { name: "First Aid Kits", quantity: 100, unit: "kits", location: "Medical Center" },
  ]
  
  export function ResourceAvailability() {
    return (
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Resource Availability</h3>
        <Table>
          <TableCaption>Current available resources</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Resource</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resources.map((resource) => (
              <TableRow key={resource.name}>
                <TableCell>{resource.name}</TableCell>
                <TableCell>{resource.quantity}</TableCell>
                <TableCell>{resource.unit}</TableCell>
                <TableCell>{resource.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  
  