import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // Add any additional NextAuth configuration here
  // For example:
  // pages: {
  //   signIn: '/auth/signin',
  // },
  // callbacks: {
  //   async session({ session, token, user }) {
  //     return session
  //   },
  // },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

