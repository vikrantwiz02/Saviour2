'use client'

import { useState, useCallback } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/Sidebar"
import { useRouter } from 'next/navigation'

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleLinkClick = useCallback((href: string) => {
    setIsOpen(false)
    router.push(href)
  }, [router])

  return (
    <div className="bg-white shadow-sm lg:hidden">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">SAVIOUR Dashboard</h1>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar onLinkClick={handleLinkClick} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

