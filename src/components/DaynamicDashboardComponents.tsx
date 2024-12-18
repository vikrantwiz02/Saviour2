'use client'

import dynamic from 'next/dynamic'

export const DynamicSidebar = dynamic(() => import("@/components/Sidebar").then(mod => mod.Sidebar), { ssr: false })
export const DynamicMobileHeader = dynamic(() => import("@/components/MobileHeader").then(mod => mod.MobileHeader), { ssr: false })

