"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import strip from "strip-markdown";
import { unified } from "unified";
import AudioPlayer from "./audio-player";

interface AudioPlayerWrapperProps {
  content: string;
  title?: string;
}

async function stripMarkdown(content: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(strip)
    .use(remarkStringify)
    .process(content);

  return result.toString().replace(/\s+/g, " ").trim();
}

export default function AudioPlayerWrapper({
  title,
  content,
}: AudioPlayerWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [strippedContent, setStrippedContent] = useState<string>("");

  useEffect(() => {
    if (!content) {
      setIsLoading(false);
      return;
    }

    stripMarkdown(content)
      .then((stripped) => {
        setStrippedContent(stripped);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to strip markdown:", err);
        setError("Failed to process audio content");
        setIsLoading(false);
      });
  }, [content]);

  if (isLoading) return <Skeleton className="mb-6 h-32 w-full rounded-lg" />;
  if (error)
    return (
      <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/20 dark:text-red-400">
        Failed to load audio content: {error}
      </div>
    );

  if (!strippedContent) return null;

  return <AudioPlayer content={strippedContent} />;
}
