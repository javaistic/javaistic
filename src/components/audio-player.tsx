"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MoreVertical, Pause, Play, Square } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
  content: string;
  title?: string;
  className?: string;
}

export default function AudioPlayer({
  content,
  title,
  className,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [rate, setRate] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(
    null,
  );
  const [isDragging, setIsDragging] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];
  const isSupported =
    typeof window !== "undefined" && "speechSynthesis" in window;

  const estimateDuration = (text: string, speechRate: number): number => {
    const wordsPerMinute = 150 * speechRate;
    const words = text.split(/\s+/).length;
    return (words / wordsPerMinute) * 60;
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (!isSupported) {
      setError("Speech synthesis not supported");
      return;
    }

    if (isPlaying && !isPaused) {
      speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPaused) {
      speechSynthesis.resume();
      setIsPaused(false);
    } else {
      // If already playing the same thing, do nothing
      if (utterance && speechSynthesis.speaking) return;

      if (!content.trim()) {
        setError("No content to read");
        return;
      }

      const newUtterance = new SpeechSynthesisUtterance(content);
      newUtterance.rate = rate;
      newUtterance.pitch = 1;
      newUtterance.volume = 1;

      newUtterance.onstart = () => {
        setIsPlaying(true);
        setIsPaused(false);
        setError(null);
        setDuration(estimateDuration(content, rate));
      };

      newUtterance.onend = () => {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentTime(0);
      };

      newUtterance.onerror = (event) => {
        if (event.error !== "interrupted") {
          setError(`Speech error: ${event.error}`);
        } else {
          setError(null);
        }
        setIsPlaying(false);
        setIsPaused(false);
      };

      setUtterance(newUtterance);
      speechSynthesis.cancel(); // cancel previous only once before speaking
      speechSynthesis.speak(newUtterance);
    }
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const handleSpeedChange = (newRate: number) => {
    if (!utterance || !isPlaying) {
      setRate(newRate);
      return;
    }

    const totalChars = content.length;
    const estimatedCharIndex = Math.floor(
      (currentTime / duration) * totalChars,
    );
    const remainingText = content.substring(estimatedCharIndex);

    const newUtterance = new SpeechSynthesisUtterance(remainingText);
    newUtterance.rate = newRate;
    newUtterance.pitch = 1;
    newUtterance.volume = 1;

    newUtterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setError(null);
      setRate(newRate);
    };

    newUtterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
    };

    newUtterance.onerror = (event) => {
      if (event.error !== "interrupted") {
        setError(`Speech error: ${event.error}`);
      }
      setIsPlaying(false);
      setIsPaused(false);
    };

    speechSynthesis.cancel();
    setUtterance(newUtterance);
    speechSynthesis.speak(newUtterance);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !duration) return;

    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = Math.max(0, Math.min(percentage * duration, duration));
    setCurrentTime(newTime);

    if (!utterance) return;

    // Stop current speech
    speechSynthesis.cancel();

    // Trim content based on percentage
    const totalChars = content.length;
    const charIndex = Math.floor(percentage * totalChars);
    const remainingText = content.substring(charIndex);

    if (!remainingText.trim()) return;

    const newUtterance = new SpeechSynthesisUtterance(remainingText);
    newUtterance.rate = rate;
    newUtterance.pitch = 1;
    newUtterance.volume = 1;

    newUtterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setError(null);
    };

    newUtterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
    };

    newUtterance.onerror = (event) => {
      if (event.error !== "interrupted") {
        setError(`Speech error: ${event.error}`);
      } else {
        setError(null);
      }
      setIsPlaying(false);
      setIsPaused(false);
    };

    setUtterance(newUtterance);
    speechSynthesis.speak(newUtterance);
  };

  const handleProgressDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !progressRef.current || !duration) return;

    const rect = progressRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;

    setCurrentTime(Math.max(0, Math.min(newTime, duration)));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying && !isPaused) {
      interval = setInterval(() => {
        setCurrentTime((prev) => prev + 0.1); // smoother updates
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, isPaused]);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
    };
  }, []);

  if (!isSupported) {
    return null;
  }

  return (
    <div className={cn("mb-3 w-full", className)}>
      <h3 className="text-muted-foreground mb-2 text-[10px] font-medium uppercase">
        🔊 Listen to this page
      </h3>
      {/* Error Display */}
      {error && (
        <div className="mb-3 rounded border border-red-200 bg-red-50 p-2 text-sm text-red-600 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Controls */}
      <div className="bg-fd-card text-fd-card-foreground hover:bg-fd-accent/80 flex items-center gap-x-2 rounded-xl border p-2 px-3 transition-colors">
        <Button
          onClick={handlePlayPause}
          size="sm"
          className="h-8 w-8 flex-shrink-0 cursor-pointer rounded-full bg-blue-600 p-0 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          {isPlaying && !isPaused ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="ml-0.5 h-4 w-4" />
          )}
        </Button>

        <Button
          onClick={handleStop}
          disabled={!isPlaying && !isPaused}
          size="sm"
          variant="outline"
          className="h-8 w-8 flex-shrink-0 cursor-pointer rounded-full p-0"
        >
          <Square className="h-3 w-3" />
        </Button>

        <div className="flex flex-1 items-center gap-x-2">
          <span className="min-w-[30px] font-mono text-xs">
            {formatTime(currentTime)}
          </span>
          <div
            ref={progressRef}
            className="bg-muted relative h-2 flex-1 cursor-pointer overflow-hidden rounded-full"
            onClick={handleProgressClick}
            onMouseDown={(e) => {
              setIsDragging(true);
              handleProgressDrag(e);
            }}
            onMouseMove={handleProgressDrag}
          >
            <div
              className="relative h-full bg-blue-600 transition-all duration-100"
              style={{
                width:
                  duration > 0 ? `${(currentTime / duration) * 100}%` : "0%",
              }}
            >
              <div
                className={cn(
                  "absolute top-1/2 right-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full",
                  "shadow-md transition-transform duration-150",
                  isDragging && "scale-150",
                )}
              />
            </div>
          </div>
          <span className="text-primary min-w-[30px] font-mono text-xs">
            {formatTime(duration)}
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="sm"
              className="bg-muted/50 hover:bg-muted/70 h-8 w-8 cursor-pointer p-0"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[2rem]">
            {speedOptions.map((speed) => (
              <DropdownMenuItem
                key={speed}
                onClick={() => handleSpeedChange(speed)}
                className={cn(
                  "cursor-pointer text-xs",
                  rate === speed && "bg-blue-100 dark:bg-blue-900/20",
                )}
              >
                {speed}x
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
