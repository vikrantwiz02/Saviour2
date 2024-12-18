'use client'

import { useState, useCallback } from 'react'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/Sidebar"
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link';

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleLinkClick = useCallback((href: string) => {
    setIsOpen(false)
    setIsMenuOpen(false)
    router.push(href)
  }, [router])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-white shadow-sm lg:hidden">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">SAVIOUR Dashboard</h1>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="px-4 py-2">
          <Link href="/about" onClick={() => handleLinkClick('/about')}>About</Link>
          <Link href="/services" onClick={() => handleLinkClick('/services')}>Services</Link>
          {/* Add more navigation links as needed */}
        </nav>
      )}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className={pathname === '/dashboard' ? '' : 'hidden'}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar onLinkClick={handleLinkClick} isMobile={true} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

