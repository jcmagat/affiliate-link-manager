import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { db } from "@/db";
import { url } from "@/db/schema";

export async function POST(request: NextRequest) {
  const { url: originalUrl } = await request.json();
  const shortCode = nanoid(8);

  console.log(originalUrl, shortCode);

  const shortUrl = await db.insert(url).values({ originalUrl, shortCode });

  return NextResponse.json({ shortCode: shortUrl.shortCode });
}
