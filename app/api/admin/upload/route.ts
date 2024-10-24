import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { picture, link } = req.body;

    try {
      const episode = await prisma.episode.create({
        data: {
          picture,
          link,
        },
      });
      res.status(201).json(episode);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: "Failed to create episode" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
