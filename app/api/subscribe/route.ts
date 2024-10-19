import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;
    try {
      // Check if the email already exists in the database
      const existingSubscriber = await prisma.subscriber.findUnique({
        where: { email },
      });

      if (existingSubscriber) {
        return res.status(409).json({ error: "Email already subscribed" });
      }

      // Create a new subscriber
      const newSubscriber = await prisma.subscriber.create({
        data: {
          email,
        },
      });
      res.status(201).json(newSubscriber);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to subscribe" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
