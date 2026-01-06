import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg' 
import { PrismaClient } from '@/app/generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

// 1. Create a global variable to hold the instance during hot-reloading
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// 2. Define the client creation logic
const createPrismaClient = () => {
  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

// 3. Use the existing global instance if available, otherwise create a new one
export const prisma = globalForPrisma.prisma || createPrismaClient()

// 4. In development, save the instance to the global variable
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma