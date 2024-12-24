'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

export default function App() {
  const pathname = usePathname()

  return (
    <div>
      <h1>Welcome to SAVIOUR</h1>
      <p>Current path: {pathname}</p>
    </div>
  )
}

