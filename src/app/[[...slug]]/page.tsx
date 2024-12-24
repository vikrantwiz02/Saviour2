import ClientOnly from '@/components/ClientOnly'
import App from './App'

export default function Home() {
  return (
    <ClientOnly>
      <App />
    </ClientOnly>
  )
}

