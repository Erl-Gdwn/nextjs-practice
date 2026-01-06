import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany();

    console.log(`Fetched ${users.length} users from the database.`);

    const formattedUsers = users.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      company: { name: user.company }
    }));

    return NextResponse.json(formattedUsers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}