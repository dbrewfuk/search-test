// Inside /pages/api/getTests.ts
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const prisma = new PrismaClient();

  try {
    const tests = await prisma.test.findMany();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch tests' });
  } finally {
    await prisma.$disconnect();
  }
}
