import { handleClerkWebhook } from '@/lib/clerk-mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const result = await handleClerkWebhook(req)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

