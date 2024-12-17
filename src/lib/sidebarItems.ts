import { Activity, AlertCircle, BarChart2, Bell, BookOpen, CloudSun, Database, Map, MessageCircle, Navigation, Newspaper, Package, PhoneCall, Shield, UserCircle, Users } from 'lucide-react'

export const sidebarItems = [
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

