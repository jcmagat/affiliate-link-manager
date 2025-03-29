import { db } from "@/db";
import { url } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { redirect } from "next/navigation";

interface RedirectPageProps {
  params: { shortcode: string };
}

export default async function RedirectPage({ params }: RedirectPageProps) {
  const { shortcode } = params;

  const shortenedUrl = await db
    .select()
    .from(url)
    .where(eq(url.shortCode, shortcode));

  if (shortenedUrl.length < 1) {
    return <div>404 - URL not found</div>;
  }

  await db
    .update(url)
    .set({ visits: sql`${url.visits} + 1` })
    .where(eq(url.id, shortenedUrl[0].id));

  redirect(shortenedUrl[0].originalUrl);
}
