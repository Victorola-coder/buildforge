import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { picture, link } = await request.json(); // Parse the request body

    // Create a new episode using Prisma
    const episode = await prisma.episode.create({
      data: {
        picture,
        link,
      },
    });

    // Return the created episode as a JSON response
    return NextResponse.json(episode, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create episode" },
      { status: 500 }
    );
  }
}
