import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const prisma = new PrismaClient();

  try {
    const tests = await prisma.test.findMany();
    res.status(200).json(tests);
  } catch (error) {
    console.error("Error fetching tests:", error);
    res
      .status(500)
      .json({ error: "Unable to fetch tests", details: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
