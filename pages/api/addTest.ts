// Inside /pages/api/addTest.ts
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const prisma = new PrismaClient();

  const { name, email } = req.body;

  try {
    const createdTest = await prisma.test.create({
      data: {
        name: name,
        email: email,
      },
    });

    res.status(200).json(createdTest);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}
