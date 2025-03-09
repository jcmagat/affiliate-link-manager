import Link from "next/link";
import { Button } from "./ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

export default function UrlList() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Recent URLs</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 justify-between">
          <Link
            className="text-blue-500"
            target="_blank"
            href={"https://www.google.com/"}
          >
            https://www.google.com/
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

            <span className="flex items-center">
              <EyeIcon className="w-4 h-4" />
              100 views
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}
