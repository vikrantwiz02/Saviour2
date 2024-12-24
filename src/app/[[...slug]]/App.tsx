'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function App() {
  const pathname = usePathname()

  // Add your routing logic here
  const renderContent = () => {
    switch (pathname) {
      case '/':
        return <h1>Welcome to SAVIOUR Home Page</h1>
      case '/about':
        return <h1>About SAVIOUR</h1>
      case '/contact':
        return <h1>Contact Us</h1>
      default:
        return <h1>404 - Page Not Found</h1>
    }
  }

  return (
    <div>
      {renderContent()}
      <p>Current path: {pathname}</p>
    </div>
  )
}

