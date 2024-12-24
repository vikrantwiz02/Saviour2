import ClientOnly from '@/components/ClientOnly'
import App from './App'

export default function CatchAllPage() {
  return (
    <ClientOnly>
      <App />
    </ClientOnly>
  )
}

