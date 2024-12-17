'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AlertCircle, Navigation, Database, CloudSun, Users, PhoneCall, UserCircle, Bell, BarChart2, Package, Newspaper, Map, Shield, BookOpen, MessageCircle, Activity, ChevronLeft, ChevronRight } from 'lucide-react'

const sidebarItems = [
  { name: 'Dashboard Overview', icon: Activity, href: '/dashboard' },
  { name: 'User Profile', icon: UserCircle, href: '/dashboard/profile' },
  { name: 'Real-Time Alerts', icon: AlertCircle, href: '/dashboard/alerts' },
  { name: 'Navigation & Evacuation', icon: Navigation, href: '/dashboard/navigation' },
  { name: 'Resource Management', icon: Database, href: '/dashboard/resources' },
  { name: 'Weather Forecast', icon: CloudSun, href: '/dashboard/weather' },
  { name: 'Community Support', icon: Users, href: '/dashboard/community' },
  { name: 'Emergency Contacts', icon: PhoneCall, href: '/dashboard/emergency' },
  { name: 'Notification Settings', icon: Bell, href: '/dashboard/notifications' },
  { name: 'Historical Data & Analytics', icon: BarChart2, href: '/dashboard/historical' },
  { name: 'Supply Chain Tracking', icon: Package, href: '/dashboard/supply-chain' },
  { name: 'Local News & Updates', icon: Newspaper, href: '/dashboard/news' },
  { name: 'Interactive Risk Map', icon: Map, href: '/dashboard/risk-map' },
  { name: 'Safety Guidelines', icon: Shield, href: '/dashboard/safety' },
  { name: 'Training & Workshops', icon: BookOpen, href: '/dashboard/training' },
  { name: 'Community Forum', icon: MessageCircle, href: '/dashboard/forum' },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={cn(
      "pb-12 transition-all duration-300 ease-in-out border-r border-gray-200",
      isOpen ? "w-64" : "w-20"
    )}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2 flex items-center justify-between">
          <h2 className={cn("text-lg font-semibold tracking-tight", !isOpen && "hidden")}>
            SAVIOUR Dashboard
          </h2>
          <Button variant="ghost" size="sm" className="w-9 p-0" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
        <div className="px-3 py-2">
          <h2 className={cn("mb-2 px-4 text-lg font-semibold tracking-tight", !isOpen && "sr-only")}>
            Features
          </h2>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button 
                    variant={pathname === item.href ? "secondary" : "ghost"} 
                    className={cn("w-full justify-start", !isOpen && "justify-center")}
                  >
                    <item.icon className={cn("h-5 w-5", isOpen && "mr-2")} />
                    {isOpen && <span>{item.name}</span>}
                  </Button>
                </Link>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

