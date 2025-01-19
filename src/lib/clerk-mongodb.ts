import { MongoClient } from 'mongodb'
import { Webhook } from 'svix'
import { WebhookEvent } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'

const mongoUri = process.env.MONGODB_URI

if (!mongoUri) {
  throw new Error('MONGODB_URI is not defined in the environment variables')
}

const client = new MongoClient(mongoUri)

export async function connectToDatabase() {
  try {
    await client.connect()
    return client.db('saviour')
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
    throw error
  }
}

export async function handleClerkWebhook(req: Request) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Get the headers
  const svix_id = req.headers.get('svix-id')
  const svix_timestamp = req.headers.get('svix-timestamp')
  const svix_signature = req.headers.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    })
  }

  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET)

  let evt: WebhookEvent

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error occurred', {
      status: 400
    })
  }

  // Get the ID and type
  const { id } = evt.data
  const eventType = evt.type

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`)
  console.log('Webhook body:', body)

  // Handle the webhook
  const db = await connectToDatabase()
  const users = db.collection('users')

  switch (eventType) {
    case 'user.created':
      await users.insertOne({
        clerkId: evt.data.id,
        email: evt.data.email_addresses[0].email_address,
        firstName: evt.data.first_name,
        lastName: evt.data.last_name,
        role: 'user', // Default role
        createdAt: new Date(),
      })
      break
    case 'user.updated':
      await users.updateOne(
        { clerkId: evt.data.id },
        {
          $set: {
            email: evt.data.email_addresses[0].email_address,
            firstName: evt.data.first_name,
            lastName: evt.data.last_name,
            updatedAt: new Date(),
          }
        }
      )
      break
    case 'user.deleted':
      await users.deleteOne({ clerkId: evt.data.id })
      break
  }

  return new Response('', { status: 200 })
}

export async function getUserRole(userId: string) {
  const db = await connectToDatabase()
  const users = db.collection('users')
  const user = await users.findOne({ clerkId: userId })
  return user ? user.role : 'user'
}

export async function checkUserRole() {
  const { userId } = await auth()
  return userId ? await getUserRole(userId) : null
}

export async function requireAuth() {
  const { userId } = await auth()
  if (!userId) throw new Error("Authentication required")
  return userId
}

export async function isAdmin() {
  const role = await checkUserRole()
  return role === "admin"
}

