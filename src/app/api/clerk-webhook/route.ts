import { handleClerkWebhook } from '@/lib/clerk-mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    console.log('Received webhook request') // Debugging line
    const result = await handleClerkWebhook(req)
    console.log('Webhook handled successfully') // Debugging line
    return NextResponse.json(result)
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

