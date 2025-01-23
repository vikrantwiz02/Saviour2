'use client'

import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export function Auth() {
  const { isSignedIn } = useUser()

  return (
    <div>
      {!isSignedIn ? (
        <SignInButton>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      ) : (
        <SignOutButton>
          <Button variant="outline">Sign Out</Button>
        </SignOutButton>
      )}
    </div>
  )
}

