import { handleClerkWebhook } from '@/lib/clerk-mongodb'

export async function POST(req: Request) {
  return handleClerkWebhook(req)
}

