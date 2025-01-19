import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase, getUserRole } from '@/lib/clerk-mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { userId } = req.query
      if (typeof userId !== 'string') {
        return res.status(400).json({ error: 'Invalid userId' })
      }
      
      await connectToDatabase()
      const role = await getUserRole(userId)
      res.status(200).json({ role })
    } catch (error) {
      console.error('Error fetching user role:', error)
      res.status(500).json({ error: 'Failed to fetch user role' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

