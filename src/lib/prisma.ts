import 'dotenv/config';
import pg from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@/generated/prisma';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

let prismaInstance: PrismaClient;

if (!globalForPrisma.prisma) {
  const pool = new pg.Pool({ 
    connectionString: process.env.DATABASE_URL 
  });
  
  const adapter = new PrismaPg(pool);

  prismaInstance = new PrismaClient({ adapter });
  globalForPrisma.prisma = prismaInstance;
} else {
  prismaInstance = globalForPrisma.prisma;
}

export const prisma = prismaInstance;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;