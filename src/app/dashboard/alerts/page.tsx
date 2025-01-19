import { requireAuth } from '@/lib/clerk-mongodb'

export default async function AlertsPage() {
  await requireAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Alerts</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">Severe Weather Warning</p>
              <p className="text-sm text-gray-500">Heavy rainfall expected in your area</p>
            </div>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Weather</span>
          </li>
          <li className="flex items-center justify-between border-b pb-2">
            <div>
              <p className="font-medium">Community Alert</p>
              <p className="text-sm text-gray-500">Neighborhood watch meeting tonight</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Community</span>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <p className="font-medium">Emergency Services Update</p>
              <p className="text-sm text-gray-500">Road closure due to accident on Main St</p>
            </div>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Emergency</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

