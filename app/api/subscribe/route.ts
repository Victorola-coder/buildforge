import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    console.log("Environment:", process.env.NODE_ENV);
    console.log("Database URL:", process.env.POSTGRES_URL);

    // Check if the email already exists in the database
    const existingSubscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Create a new subscriber
    const newSubscriber = await prisma.subscriber.create({
      data: {
        email,
      },
    });

    return NextResponse.json(newSubscriber, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/subscribe:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
