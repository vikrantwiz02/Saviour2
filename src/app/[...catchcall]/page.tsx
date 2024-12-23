import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catch-all Route',
  description: 'This is a catch-all route that handles any path not explicitly defined.',
}

export default function CatchAllRoute() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  )
}

