'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { sidebarItems } from '@/lib/sidebarItems'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface SidebarProps {
  onLinkClick?: (href: string) => void
}

export const Sidebar: React.FC<SidebarProps> = ({ onLinkClick }) => {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleLinkClick = (href: string) => {
    if (onLinkClick) {
      onLinkClick(href)
    }
  }

  return (
    <div className={cn(
      "flex flex-col bg-white border-r transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-2xl font-bold">SAVIOUR</h2>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden lg:flex"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-1 px-2">
          {sidebarItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => handleLinkClick(item.href)}>
              <Button
                variant={pathname === item.href ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  isCollapsed ? "px-2" : "px-4"
                )}
              >
                <item.icon className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
                {(!isCollapsed || typeof window !== 'undefined' && window.innerWidth < 1024) && <span>{item.name}</span>}
              </Button>
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

