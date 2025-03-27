"use client";

import { useState, useEffect } from "react";
import { InferSelectModel } from "drizzle-orm";
import { url } from "@/db/schema";
import Link from "next/link";
import { Button } from "./ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

export default function UrlList() {
  type UrlType = InferSelectModel<typeof url>;
  const [urls, setUrls] = useState<UrlType[]>([]);

  const fetchUrls = async () => {
    try {
      const response = await fetch("/api/urls");
      const data = await response.json();

      setUrls(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>
      <ul className="space-y-2">
        {urls.map((url) => (
          <li className="flex items-center gap-2 justify-between">
            <Link
              className="text-blue-500"
              target="_blank"
              href={url.originalUrl}
            >
              {`${process.env.NEXT_PUBLIC_BASE_URL}/${url.shortCode}`}
            </Link>

            <div className="flex items-center gap-3">
              <Button
                className="text-muted-foreground hover:bg-muted"
                variant="ghost"
                size="icon"
              >
                <CopyIcon className="w-4 h-4" />
                <span className="sr-only">Copy URL</span>
              </Button>

              <span className="flex items-center gap-2">
                <EyeIcon className="w-4 h-4" />
                {`${url.visits} views`}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
