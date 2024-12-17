'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-600 text-white font-sans">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="SAVIOUR Logo" width={40} height={40} />
            <span className="text-2xl font-bold font-serif">SAVIOUR</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="hover:text-blue-200 transition-colors hover:scale-105 transform">About</Link>
            <Link href="/services" className="hover:text-blue-200 transition-colors hover:scale-105 transform">Services</Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors hover:scale-105 transform">Contact</Link>
            <Button 
              onClick={() => signIn('google')}
              variant="outline" 
              size="sm"
              className="text-white border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Sign In / Sign Up
            </Button>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link href="/services" className="hover:text-blue-200 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
            <Button 
              onClick={() => signIn('google')}
              variant="outline" 
              size="sm"
              className="text-white border-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Sign In / Sign Up
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
