"use client";

import React from "react";
import {
  Check,
  Copy,
  LoaderCircle,
  PlayIcon,
  PencilIcon,
  XIcon,
} from "lucide-react";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { cn } from "@/lib/utils";
import { useDebounce } from "use-debounce";

// Module-level highlighter cache and helpers to avoid recreating shiki
// highlighters for each CodePlayground instance which is expensive.
const highlighterCache: Map<string, Promise<any>> = new Map();

// Pre-compiled and cached regex patterns for better performance
const BACKGROUND_RE = /background(?:-color)?\s*:\s*[^;"']+;?/gi;
const EMPTY_STYLE_RE = /\sstyle="\s*"/gi;
const SEMICOLON_TRIM_RE_1 = /style="\s*;+/gi;
const SEMICOLON_TRIM_RE_2 = /;+\s*"/gi;

async function getHighlighterFor(language: string) {
  const key = language || "_default";
  if (highlighterCache.has(key)) return highlighterCache.get(key)!;
  const p = (async () => {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [language],
    });
  })();
  highlighterCache.set(key, p);
  return p;
}

// Optimized background stripping with compiled regexes and caching
const stripPreBackground = (() => {
  // Cache cleaned results for same input to avoid redundant processing
  const cache = new Map<string, string>();
  const MAX_CACHE_SIZE = 50;

  return (html: string): string => {
    if (cache.has(html)) {
      return cache.get(html)!;
    }

    let cleaned = html
      .replace(BACKGROUND_RE, "")
      .replace(EMPTY_STYLE_RE, "")
      .replace(SEMICOLON_TRIM_RE_1, 'style="')
      .replace(SEMICOLON_TRIM_RE_2, '"');

    // Simple LRU cache management
    if (cache.size >= MAX_CACHE_SIZE) {
      const firstKey = cache.keys().next().value;
      if (firstKey !== undefined) {
        cache.delete(firstKey);
      }
    }
    cache.set(html, cleaned);

    return cleaned;
  };
})();

// Hoisted CopyButtonLocal to avoid recreating the inner component on every render.
function CopyButtonLocal({
  className,
  containerRef,
  ...props
}: {
  className?: string;
  containerRef: React.RefObject<HTMLElement | null>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [checked, onClick] = useCopyButton(() => {
    const container = containerRef.current;
    if (!container) return;

    // Prefer copying from a highlighted <pre>. If not present (editing mode),
    // fall back to any <textarea> value inside the container.
    const preElements = container.getElementsByTagName("pre");
    if (preElements.length > 0) {
      const pre = preElements.item(0)!;
      const clone = pre.cloneNode(true) as HTMLElement;

      // Use querySelectorAll once instead of forEach for better performance
      const ignoreNodes = clone.querySelectorAll(".nd-copy-ignore");
      for (let i = 0; i < ignoreNodes.length; i++) {
        ignoreNodes[i].replaceWith("\n");
      }

      const text = (clone.textContent ?? "").trim();
      void navigator.clipboard.writeText(text);
      return;
    }

    const textareaElements = container.getElementsByTagName("textarea");
    if (textareaElements.length > 0) {
      const ta = textareaElements.item(0) as HTMLTextAreaElement;
      void navigator.clipboard.writeText(ta.value ?? "");
    }
  });

  return (
    <button
      type="button"
      className={cn(
        buttonVariants({
          className:
            "hover:bg-fd-accent hover:text-fd-accent-foreground inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-3.5",
        }),
        className,
      )}
      aria-label={checked ? "Copied Text" : "Copy Text"}
      onClick={onClick}
      {...props}
    >
      {checked ? <Check /> : <Copy />}
    </button>
  );
}

export type CodePlaygroundProps = {
  code: string;
  language?: string;
  children?: React.ReactNode;
};

export default function CodePlayground({
  code,
  language = "java",
  children,
}: CodePlaygroundProps) {
  // Internal editable/saved code flow:
  // - `displayCode` is the saved code used for highlighting and running by default.
  // - `editedCode` holds in-progress edits in edit mode.
  // - `isEditing` toggles editor visibility.
  const [displayCode, setDisplayCode] = React.useState<string>(
    typeof code === "string" ? code.trim() : (code as any),
  );
  const [editedCode, setEditedCode] = React.useState<string | null>(null);
  const [isEditing, setIsEditing] = React.useState(false);

  // Trimmed code used for compile/run/highlight (comes from displayCode when
  // not editing; run will prefer editedCode when editing but not saved).
  const trimmedCode = React.useMemo(
    () =>
      typeof (isEditing && editedCode ? editedCode : displayCode) === "string"
        ? (isEditing && editedCode ? editedCode : displayCode).trim()
        : isEditing && editedCode
          ? editedCode
          : displayCode,
    [displayCode, editedCode, isEditing],
  );

  // Debounce the trimmed code for syntax highlighting to avoid excessive re-renders
  const [debouncedTrimmedCode] = useDebounce(trimmedCode, 300);
  const [running, setRunning] = React.useState(false);
  const [output, setOutput] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [showOutput, setShowOutput] = React.useState(false);
  const areaRef = React.useRef<HTMLDivElement | null>(null);
  const codeRef = React.useRef<HTMLPreElement | null>(null);
  const [lightHtml, setLightHtml] = React.useState<string | null>(null);
  const [darkHtml, setDarkHtml] = React.useState<string | null>(null);
  const [highlighterError, setHighlighterError] = React.useState<string | null>(
    null,
  );
  const [status, setStatus] = React.useState<string | null>(null);
  const mountedRef = React.useRef(true);
  const fetchControllerRef = React.useRef<AbortController | null>(null);

  // Highlight code using shiki in the browser at runtime and produce both
  // light and dark HTML variants. We render both and rely on Tailwind's
  // `dark:` utilities (class or media) to show the correct one.
  React.useEffect(() => {
    mountedRef.current = true;
    setHighlighterError(null);
    setLightHtml(null);
    setDarkHtml(null);

    let mounted = true;
    (async () => {
      try {
        const highlighter = await getHighlighterFor(language);
        if (!mounted) return;

        // Use debounced code for highlighting to improve performance in edit mode
        const codeToHighlight = debouncedTrimmedCode as string;
        const lHtmlRaw = highlighter.codeToHtml(codeToHighlight, {
          lang: language,
          theme: "github-light",
        });
        const dHtmlRaw = highlighter.codeToHtml(codeToHighlight, {
          lang: language,
          theme: "github-dark",
        });

        const lHtml = stripPreBackground(lHtmlRaw);
        const dHtml = stripPreBackground(dHtmlRaw);

        if (!mountedRef.current) return;
        setLightHtml(lHtml);
        setDarkHtml(dHtml);

        requestAnimationFrame(() => {
          if (!areaRef.current) return;
          const pres = Array.from(
            areaRef.current.getElementsByTagName("pre"),
          ) as HTMLPreElement[];
          const visible = pres.find(
            (p) => getComputedStyle(p).display !== "none",
          );
          if (visible) codeRef.current = visible;
        });
      } catch (err: any) {
        if (!mountedRef.current) return;
        setHighlighterError(String(err?.message ?? err));
        setLightHtml(null);
        setDarkHtml(null);
        requestAnimationFrame(() => {
          if (!areaRef.current) return;
          const pre = areaRef.current
            .getElementsByTagName("pre")
            .item(0) as HTMLPreElement | null;
          if (pre) codeRef.current = pre;
        });
      }
    })();

    return () => {
      mounted = false;
      mountedRef.current = false;
    };
    // Use debounced code for highlighting dependency
  }, [debouncedTrimmedCode, language]);

  const execute = React.useCallback(
    async (codeOverride?: string) => {
      // Cancel any previous fetch for the same component
      if (fetchControllerRef.current) {
        fetchControllerRef.current.abort();
        fetchControllerRef.current = null;
      }
      const controller = new AbortController();
      fetchControllerRef.current = controller;

      setRunning(true);
      setShowOutput(true);
      setOutput("");
      setError(null);
      setStatus("Compiling...");

      try {
        const codeToExecute =
          typeof codeOverride === "string"
            ? codeOverride
            : isEditing && editedCode
              ? editedCode
              : trimmedCode;

        const res = await fetch("/api/playground", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code: codeToExecute }),
          signal: controller.signal,
        });

        setStatus("Executing...");

        if (!res.ok) {
          const ct = res.headers.get("content-type") || "";
          let errorMessage: string;

          if (ct.includes("application/json")) {
            const json = await res.json().catch(() => null);
            errorMessage =
              json?.error ??
              json?.message ??
              JSON.stringify(json) ??
              `Request failed: ${res.status}`;
          } else {
            const txt = await res.text().catch(() => null);
            errorMessage = txt ?? `Request failed: ${res.status}`;
          }

          setOutput(null);
          setError(errorMessage);
          return;
        }

        const contentType = (
          res.headers.get("content-type") || ""
        ).toLowerCase();

        if (
          res.body &&
          (contentType.includes("text/event-stream") ||
            contentType.includes("text/plain"))
        ) {
          const reader = res.body.getReader();
          const decoder = new TextDecoder();
          let outputBuffer = "";

          try {
            let done = false;
            while (!done) {
              const { value, done: d } = await reader.read();
              if (value) {
                const chunk = decoder.decode(value, { stream: true });
                outputBuffer += chunk;
                setError(null);
                setOutput(outputBuffer);
              }
              done = !!d;
            }
          } finally {
            reader.releaseLock();
          }
        } else if (contentType.includes("application/json")) {
          const data = await res.json().catch(() => null);
          const body = data ?? {};

          // Normalize possible locations for stdout/stderr. Many remote
          // runners return { stdout: "", stderr: "..." } when compilation
          // fails. We must not let an empty-string stdout mask available
          // stderr. Prefer showing stderr when stdout is empty.
          if (body && typeof body === "object") {
            const nested = (body as any).result ?? (body as any).output ?? body;

            const stdoutRaw =
              (nested && (nested as any).stdout) ??
              (nested && (nested as any).output);
            const stderrRaw =
              (nested && (nested as any).stderr) ??
              (body as any).stderr ??
              (nested && (nested as any).error);

            const stdoutStr = stdoutRaw == null ? "" : String(stdoutRaw);
            const stderrStr = stderrRaw == null ? "" : String(stderrRaw);

            if (stdoutStr.trim().length > 0) {
              setOutput(stdoutStr);
              setError(null);
            } else if (stderrStr.trim().length > 0) {
              // Put compilation/runtime errors into the `error` state so the
              // UI renders the error color scheme instead of the normal
              // output panel.
              setError(stderrStr);
              setOutput(null);
            } else {
              // Fallback: pretty-print nested or whole body
              const toShow =
                nested && typeof nested === "object" ? nested : body;
              setOutput(JSON.stringify(toShow, null, 2));
            }
          } else {
            setOutput(
              typeof body === "string" ? body : JSON.stringify(body, null, 2),
            );
          }
        } else {
          const txt = await res.text().catch(() => "");
          setError(null);
          setOutput(txt);
        }
      } catch (e: any) {
        if (controller.signal.aborted) {
          return;
        }

        let msg = String(e?.message ?? e);

        // Only attempt JSON parsing if the message looks like JSON
        if (msg.startsWith("{") || msg.startsWith("[")) {
          try {
            const parsed = JSON.parse(msg);
            msg =
              parsed?.error ??
              parsed?.message ??
              JSON.stringify(parsed, null, 2) ??
              msg;
          } catch (_err) {
            // Keep original message if JSON parsing fails
          }
        }

        setError(msg);
      } finally {
        setRunning(false);
        setStatus(null);
        fetchControllerRef.current = null;
      }
    },
    [trimmedCode, isEditing, editedCode],
  );

  // Keep the old `run` name for the UI button; it simply calls execute().
  const run = React.useCallback(() => {
    void execute();
  }, [execute]);

  // Expose a global helper so external scripts/pages can trigger the
  // playground run with optional code override: window.runCode(code?: string)
  React.useEffect(() => {
    try {
      (window as any).runCode = (code?: string) => {
        void execute(code);
      };
    } catch (_err) {
      // ignore in non-browser environments
    }
    return () => {
      try {
        delete (window as any).runCode;
      } catch (_e) {
        /* ignore */
      }
    };
  }, [execute]);

  // Keep internal displayCode in sync if the incoming `code` prop changes.
  React.useEffect(() => {
    setDisplayCode(typeof code === "string" ? code.trim() : (code as any));
  }, [code]);

  // Editor actions
  const onStartEdit = React.useCallback(() => {
    setEditedCode(displayCode);
    setIsEditing(true);
  }, [displayCode]);

  const onCancelEdit = React.useCallback(() => {
    setEditedCode(null);
    setIsEditing(false);
  }, []);

  const onSaveEdit = React.useCallback(() => {
    if (editedCode != null) setDisplayCode(editedCode);
    setEditedCode(null);
    setIsEditing(false);
  }, [editedCode]);

  return (
    <figure
      className={
        "bg-fd-card shiki not-prose relative my-4 overflow-hidden rounded-xl border p-1 text-sm outline-none"
      }
    >
      {/* Actions in top-right (Run, Edit/Save/Cancel, Copy) */}
      <div
        className={
          "bg-fd-card text-fd-muted-foreground absolute top-1 right-1 z-2 flex items-center rounded-bl-lg border-b border-l"
        }
      >
        <button
          type="button"
          onClick={run}
          disabled={running}
          className={cn(
            buttonVariants({
              className:
                "hover:bg-fd-accent hover:text-fd-accent-foreground inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-3.5",
            }),
          )}
          aria-label={running ? "Running" : "Run code"}
          title={running ? "Running" : "Run"}
        >
          {running ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <PlayIcon className="fill-muted-background" />
          )}
        </button>

        {isEditing ? (
          <>
            <button
              type="button"
              onClick={onSaveEdit}
              className={cn(
                buttonVariants({
                  className:
                    "hover:bg-fd-accent hover:text-fd-accent-foreground inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-3.5",
                }),
              )}
              title="Save"
            >
              <Check />
            </button>
            <button
              type="button"
              onClick={onCancelEdit}
              className={cn(
                buttonVariants({
                  className:
                    "hover:bg-fd-accent hover:text-fd-accent-foreground inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-3.5",
                }),
              )}
              title="Cancel"
            >
              <XIcon />
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={onStartEdit}
            className={cn(
              buttonVariants({
                className:
                  "hover:bg-fd-accent hover:text-fd-accent-foreground inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-3.5",
              }),
            )}
            title="Edit"
          >
            <PencilIcon className="fill-muted-background" />
          </button>
        )}

        <CopyButtonLocal containerRef={areaRef} />
      </div>

      <div
        ref={areaRef}
        className={cn(
          "fd-scroll-container max-h-[480px] overflow-auto py-2 text-[13px]",
          "bg-fd-secondary rounded-lg border",
        )}
      >
        {/* Render both light and dark highlighted HTML. Tailwind's `dark:`
            utilities (either class-based or media-based) will control which
            one is visible. If shiki isn't available, fall back to raw code. */}
        {isEditing ? (
          <div className="px-2">
            <textarea
              value={editedCode ?? displayCode}
              onChange={(e) => setEditedCode(e.target.value)}
              className="min-h-[200px] w-full rounded-md bg-transparent font-mono text-xs focus:outline-none"
            />
          </div>
        ) : lightHtml || darkHtml ? (
          <>
            {lightHtml ? (
              <div
                className="block dark:hidden"
                aria-hidden={false}
                aria-live="polite"
                dangerouslySetInnerHTML={{ __html: lightHtml }}
              />
            ) : null}
            {darkHtml ? (
              <div
                className="hidden dark:block"
                aria-hidden={false}
                aria-live="polite"
                dangerouslySetInnerHTML={{ __html: darkHtml }}
              />
            ) : null}
          </>
        ) : (
          <pre ref={codeRef} className={"font-mono text-xs"}>
            <code>{displayCode}</code>
          </pre>
        )}

        {/* If shiki failed to load, show a small hint for debugging */}
        {highlighterError ? (
          <div className="mt-2 text-xs text-red-400">
            Shiki error: {highlighterError}
          </div>
        ) : null}
      </div>

      {showOutput && (
        <div className="">
          <h4 id="output" className="my-2 ml-2 text-sm font-medium">
            Output
          </h4>
          <div
            className={cn(
              "rounded-md border p-3 font-mono text-xs",
              error
                ? "border-red-700 text-white dark:border-red-400"
                : "bg-black text-white",
            )}
          >
            {status ? (
              <div className="text-fd-muted-foreground text-xs">{status}</div>
            ) : error ? (
              <pre className="whitespace-pre-wrap text-red-500 dark:text-red-400">
                {error}
              </pre>
            ) : output ? (
              <pre className="whitespace-pre-wrap">{output}</pre>
            ) : (
              <div className="text-fd-muted-foreground text-xs">
                (no output yet)
              </div>
            )}
          </div>
        </div>
      )}
    </figure>
  );
}
