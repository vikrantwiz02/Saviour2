import DashboardLayout from "@/components/DashboardLayout"
import UserProfile from "@/components/UserProfile"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        <UserProfile />
      </div>
    </DashboardLayout>
  )
}
