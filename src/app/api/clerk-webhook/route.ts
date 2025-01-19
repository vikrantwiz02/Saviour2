import { headers } from 'next/headers'
import { handleClerkWebhook } from '@/lib/clerk-mongodb'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    // Get the headers and convert to plain object
    const headersList = await headers()
    const headersObject: Record<string, string> = {}
    for (const [key, value] of headersList.entries()) {
      headersObject[key] = value
    }
    
    // Create a new request with the headers
    const webhookRequest = new Request(req.url, {
      method: req.method,
      headers: headersObject,
      body: req.body,
    })

    const result = await handleClerkWebhook(webhookRequest)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

