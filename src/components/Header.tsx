'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/nextjs'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isSignedIn, user } = useUser()
  const router = useRouter()

  return (
    <header className="bg-white text-black font-sans">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="SAVIOUR Logo" width={40} height={40} />
            <span className="text-2xl font-bold font-serif">SAVIOUR</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="hover:text-blue-600 transition-colors hover:scale-105 transform">About</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors hover:scale-105 transform">Services</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors hover:scale-105 transform">Contact</Link>
            <Link href="/donate" className="hover:text-blue-600 transition-colors hover:scale-105 transform">Donate</Link>
            {!isSignedIn && (
              <>
                <SignInButton>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    Log In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
            {isSignedIn && (
              <>
                <Button asChild variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            <Link href="/donate" className="hover:text-blue-600 transition-colors">Donate</Link>
            {!isSignedIn && (
              <>
                <SignInButton>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    Log In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                    Sign Up
                  </Button>
                </SignUpButton>
              </>
            )}
            {isSignedIn && (
              <>
                <Button asChild variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

