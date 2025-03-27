"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UrlForm() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const respose = await fetch("/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url,
        }),
      });

      await respose.json();
      setUrl("");
    } catch (error) {
      console.log("Error shortening url: ", error);
    } finally {
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input
          className="h-12"
          type="url"
          placeholder="Enter URL to shorten"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className="w-full p-2" type="submit">
          Shorten URL
        </Button>
      </div>
    </form>
  );
}
