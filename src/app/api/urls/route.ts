import { NextResponse } from "next/server";
import { db } from "@/db";
import { url } from "@/db/schema";

export async function GET() {
  try {
    const urls = await db.select().from(url).orderBy(url.createdAt);
    return NextResponse.json(urls, { status: 200 });
  } catch (error) {
    console.error("Error fetching URLs: ", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
