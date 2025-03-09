"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function UrlForm() {
  const [url, setUrl] = useState<string>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(url);
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
