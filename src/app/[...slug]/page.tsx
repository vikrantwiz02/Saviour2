// Verify that this file exists and contains the catch-all route handler
// If it doesn't exist or is incorrect, we'll need to create or update it

import ClientOnly from '@/components/ClientOnly'
import App from '@/components/App'

export default function CatchAllPage() {
  return (
    <ClientOnly>
      <App />
    </ClientOnly>
  )
}

