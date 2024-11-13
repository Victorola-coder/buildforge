import sendMail from "@/app/helpers/email";
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

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    // Get paginated results
    const subscribers = await prisma.subscriber.findMany({
      where: search
        ? {
            email: {
              contains: search,
              mode: "insensitive" as const,
            },
          }
        : {},
      skip,
      take: limit,
    });

    const total = await prisma.subscriber.count({
      where: search
        ? {
            email: {
              contains: search,
              mode: "insensitive" as const,
            },
          }
        : {},
    });
    const totalPages = Math.ceil(total / limit);

    return NextResponse.json({
      success: true,
      subscribers,
      totalPages,
      currentPage: page,
      totalSubscribers: total,
    });
  } catch (error) {
    console.error("Error in GET /api/subscribe:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Please provide an email" },
        { status: 400 }
      );
    }

    const subscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (!subscriber) {
      return NextResponse.json(
        { error: "Email not found in subscribers" },
        { status: 404 }
      );
    }

    await prisma.subscriber.delete({
      where: { email },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Subscriber successfully removed",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in DELETE /api/subscribe:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { title, content } = await req.json();

    const subscribers = await prisma.subscriber.findMany({
      select: {
        email: true,
      },
    });

    for (const subscriber of subscribers) {
      try {
        await sendMail(subscriber.email, title, "", "welcome.ejs", {
          content,
        });
      } catch (emailError) {
        console.error(
          `Failed to send email to ${subscriber.email}:`,
          emailError
        );
      }
    }

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in PUT /api/subscribe:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
