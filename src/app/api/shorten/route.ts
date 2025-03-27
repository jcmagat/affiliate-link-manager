import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { db } from "@/db";
import { url } from "@/db/schema";

export async function POST(request: NextRequest) {
  // TODO: add error handling

  const { url: originalUrl } = await request.json();
  const shortCode = nanoid(8);

  const shortUrl = await db.insert(url).values({ originalUrl, shortCode });

  return NextResponse.json({ shortCode: shortUrl.shortCode });
}
