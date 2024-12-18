import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import { authOptions } from "@/lib/auth"
import DashboardLayout from "@/components/DashboardLayout"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/auth/login')
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        {children}
      </div>
    </DashboardLayout>
  )
}